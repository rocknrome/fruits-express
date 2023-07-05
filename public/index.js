const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Set up basic routes

app.get('/hello', (req, res) => {
  console.log('hello world!');
  res.send('hello world!');
});

app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Why hello there, ${name}!`);
});

app.get('/five', (req, res) => {
  const numbers = [1, 2, 3, 4, 5];
  res.send(numbers);
});

// Fruit Routes

const fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango'];

app.get('/fruits', (req, res) => {
  res.send(fruits);
});

app.get('/fruits/sort', (req, res) => {
  const sortedFruits = [...fruits].sort();
  res.send(sortedFruits);
});

app.get('/fruits/:name', (req, res) => {
  const fruitName = req.params.name;
  const fruit = fruits.find(fruit => fruit === fruitName);

  if (fruit) {
    res.send(fruit);
  } else {
    res.send('Fruit not found!');
  }
});

// Vegetable Routes

const veggies = ['carrot', 'broccoli', 'spinach', 'potato', 'celery'];

app.get('/veggies', (req, res) => {
  res.send(veggies);
});

app.get('/veggies/sort', (req, res) => {
  const sortedVeggies = [...veggies].sort();
  res.send(sortedVeggies);
});

app.get('/veggies/:name', (req, res) => {
  const veggieName = req.params.name;
  const veggie = veggies.find(veggie => veggie === veggieName);

  if (veggie) {
    res.send(veggie);
  } else {
    res.send('Veggie not found!');
  }
});



// Catch-all route

app.get('*', (req, res) => {
  res.send('404 Not Found');
});

app.listen(PORT, () => {
  console.log(`Serving up delicious fruits on port ${PORT} 🍒`);
});
