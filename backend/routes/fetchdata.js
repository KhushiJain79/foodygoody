const express = require('express');
const app= express.Router();
const Meal = require('../Model/Meal');




app.get('/getfood/:search', async(req, res) => {
   
  const searchQuery = req.params.search; // Get the search query parameter from the request

  try {
    let meals;
    console.log(searchQuery);
    console.log(searchQuery);
   
    if (searchQuery) {
      // If a search query is provided, perform a search based on recipe name
      meals = await Meal.find({ "Ingredients": { $regex: new RegExp(searchQuery, 'i') } });
     
    
     
    } else {
      // If no search query is provided, fetch all meals
      meals = await Meal.find();
    }
    res.json(meals); 
  } catch (error) {
 
    res.status(500).json({ message: error.message }); 
  }
     
});
app.get('/getfood', (req, res) => {
  Meal.find()
    .then(meal => res.json(meal))
    .catch(err => res.status(404).json({ nomealfound: 'No meal found' }));
});


module.exports = app;
