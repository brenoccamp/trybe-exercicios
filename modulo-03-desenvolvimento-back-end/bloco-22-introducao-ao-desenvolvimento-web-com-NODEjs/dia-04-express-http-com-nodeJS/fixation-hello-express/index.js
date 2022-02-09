// Fixation exercise 1: Creating my first API using express to say "Hello World!"
const express = require('express');

const app = express(); // 1

// app.get('/hello', handleHelloWorldRequest); // 2

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// }); // 3

// function handleHelloWorldRequest(req, res) {
//   res.status(200).send('Hello World!'); // 4
// }

// Fixation exercise 2: Returns an array of drinks on route /drinks
const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', (req, res) => {
  res.send(recipes);
});

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', (req, res) => {
  res.send(drinks);
});

app.get('/sorted-drinks', (req, res) => {
  const sortedDrinks = drinks.sort((a, b) => a.name.localeCompare(b.name));
  console.log(sortedDrinks);
  res.send(sortedDrinks);
});

app.listen('3001', () => {
  console.log('Listening on door 3001');
});