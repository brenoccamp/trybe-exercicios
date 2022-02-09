// Fixation exercise 1: Creating my first API using express to say "Hello World!"
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express(); // 1
app.use(cors());
app.use(bodyParser.json());

app.get('/hello', handleHelloWorldRequest); // 2

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// }); // 3

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); // 4
}

// Fixation exercise 2: Returns an array of drinks on route /drinks
const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 30.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', (_req, res) => {
  res.send(recipes);
});

// Fixation using query
app.get('/recipes/search', (req, res) => {
  const { name, maxPrice, minPrice } = req.query;
  
  const filteredRecipes = recipes.filter((recipe) => recipe.name.includes(name) && recipe.price < parseInt(maxPrice) && recipe.price >= parseInt(minPrice));
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', (_req, res) => {
  res.send(drinks);
});

app.get('/sorted-drinks', (_req, res) => {
  const sortedDrinks = drinks.sort((a, b) => a.name.localeCompare(b.name));
  console.log(sortedDrinks);
  res.send(sortedDrinks);
});

// Fixation using query
app.get('/drinks/search', (req, res) => {
  const { name } = req.query;

  const filteredDrinks = drinks.filter((drinkRecipe) => drinkRecipe.name.includes(name));
  res.status(200).json(filteredDrinks);
})

// Fixation using params (usually single params)
app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;

  const drinkRecipe = drinks.find((recipe) => recipe.id === parseInt(id));

  if (!drinkRecipe) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(drinkRecipe);
})

// Request using Method POST
app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json(`Drink ${name} was successfully added!`);
});



// Making a route to PUT(update) a recipe
app.put('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: `Recipe with id:${id} not found!`});

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

// Making a route PUT(update) a drink
app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((drinkRecipe) => drinkRecipe.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: `Drink with id:${id} not found!` });

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

// Making a route to DELETE a recipe
app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: `Recipe with id: ${id} not found!` });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

// Making a route to DELETE a drink
app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((drinkRecipe) => drinkRecipe.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: `Drink with id:${id} not found!` });

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
});

// Port to listen to the app
app.listen('3001', () => {
  console.log('Listening on door 3001');
});

// Exemplos de requisições PUT, DELETE e POST no front-end

// // Requisição do tipo PUT
// fetch(`http://localhost:3001/recipes/2`, {
//   method: 'PUT',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: 'Macarrão ao alho e óleo',
//     price: 40
//   })
// });

// // Requisição do tipo DELETE
// fetch(`http://localhost:3001/recipes/4`, {
//   method: 'DELETE',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   }
// });

// // Requisição do tipo POST
// fetch(`http://localhost:3001/recipes/`, {front-end
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     id: 4,
//     name: 'Macarrão com Frango',
//     price: 30
//   })
// });
