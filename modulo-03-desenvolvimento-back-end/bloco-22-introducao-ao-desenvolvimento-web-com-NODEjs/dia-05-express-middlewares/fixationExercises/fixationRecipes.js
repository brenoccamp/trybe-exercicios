const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');


const app = express();
app.use(bodyParser.json());

//This route doesn't pass authentication middleware!
app.get('/open', (req, res) => {
  res.send('open');
});

// All route with /recipes/<something-else> let's be here and goes to router
const recipesRouter = require('./recipesRouter');

app.use('/recipes', recipesRouter);
//Under this line, hole routes are secure.
app.use(authMiddleware);
// const recipes = [ // -> Be in recipesRouter now
//   { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
//   { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
//   { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
// ];

// Refactoring to create a function that validates the name and reuse it in other ones functions.
// function validateName(req, res, _next) { // -> Be in recipesRouter now
//   const { name } = req.body;
//   if (!name || name === '') return res.status(404).json({ message: 'Invalid data!' });

//   // next();
// }

// Fixation 1 - Create a function to validate if the price was typed.
// function validatePrice(req, res, next) {
//   const { price } = req.body;
//   const isPriceANumber = typeof(price) === 'number';
//   const isPriceBiggerThanZero = price >= 0 ? false : true;

//   if (!price || isPriceANumber || isPriceBiggerThanZero || validateName(req, res, next)) {
//     return res.status(404).json({ message: 'Invalid data!' });
//   }

//   next();
// }

// app.get('/recipes', function (req, res) {
//   res.status(200).json(recipes);
// });

// app.get('/recipes/search', function (req, res) {
//   const { name, maxPrice } = req.query;
//   const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
//   res.status(200).json(filteredRecipes);
// });

// app.get('/recipes/:id', function (req, res) {
//   const { id } = req.params;
//   const recipe = recipes.find((r) => r.id === parseInt(id));
//   if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});
  
//   res.status(200).json(recipe);
// });

// //Now put the validateName function where we want to uses it.
// app.post('/recipes', validatePrice, function (req, res) {
//   const { id, name, price, waitTime } = req.body;
//   const { username } = req.user // -> Here we are accessing the user founded at the auth middleware
//   recipes.push({ id, name, price, waitTime, chef: username });
//   res.status(201).json({ message: 'Recipe created successfully!'});
// });

// app.put('/recipes/:id', validatePrice, function (req, res) {
//   const { id } = req.params;
//   const { name, price, waitTime } = req.body;
//   const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));
  
//   if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

//   recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

//   res.status(204).end();
// });

// app.delete('/recipes/:id', function (req, res) {
//   const { id } = req.params;
//   const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

//   if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

//   recipes.splice(recipeIndex, 1);

//   res.status(204).end();
// });

// app.all('*', function (req, res) {
//     return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
// });

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});