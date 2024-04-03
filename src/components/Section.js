import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Section=() =>{
  const [searchInput, setSearchInput] = useState('');
  const [meals, setMeals] = useState([]);


  const handleSearch = async () => {
    try {
      console.log(searchInput);
      const response = await fetch(`http://localhost:5000/api/fetchdata/getfood/${searchInput}`);
      // const response = await fetch('http://localhost:5000/api/fetchdata/getfood/${searchInput}');

      const data = await response.json();
      setMeals(data);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
};
  // const handleSearch = async () => {
  //   try {
     
  //     const response = await fetch(`http://localhost:5000/api/fetchdata/getfood/search=${searchInput}`);
     
  //     if (!response.ok) {
  //     throw new Error('Failed to fetch meals');
  //     }
  // console.log(response);

  //     const data = response.json(); // Parse response body as JSON
  //     // console.log(data);
  //     setMeals(data); // Update state with fetched data
      
  //     console.log(data);

  //   } catch (error) {
  //     console.error('Error fetching data:', error);
    // }

  return (
    <>
      <div className="container-fluid">
        <div className="meal_top">
          <div className="foodico">
            <img src="https://cdn-icons-png.flaticon.com/128/5930/5930300.png" height={75} width={75} alt=""/>
            <img src="https://cdn-icons-png.flaticon.com/128/706/706934.png" height={75} width={75} alt=""/>
            <img src="https://cdn-icons-png.flaticon.com/128/5062/5062839.png" height={75} width={75} alt=""/>
            <img src="https://cdn-icons-png.flaticon.com/128/877/877951.png" height={75} width={75} alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/737/737967.png" height={75} width={75} alt=""/>
            <img src="https://cdn-icons-png.flaticon.com/128/706/706164.png" height={75} width={75} alt=""/>
            <img src="https://cdn-icons-png.flaticon.com/512/2821/2821805.png" height={75} width={75} alt=""/>
          </div>
        </div>

        <div className="meal-wrapper">
          <div className="meal-search">
            <p className="heading">Bringing the flavor game to a whole new level.</p>
            <h2 className="title">Find Meals For Your Ingredients</h2>
            <blockquote>Real food doesn't have ingredients, real food is ingredients.<br/>
              <cite>- Jamie Oliver</cite>
            </blockquote>

            <div className="meal-search-box">
              <input type="text" className="search-control" placeholder="Enter an ingredient" onChange={(e) => setSearchInput(e.target.value)} id="search-input"/>
              <button type="submit" className="search-btn btn" id="search-btn" onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} style={{ height: '20px' }} />
                </button>
              </div>
             
              {/* <ul>

              {meals.map((meal) => (
          <li key={meal._id}>{meal.Instructions}</li>

          ))};
              </ul> */}
         
          </div>

          <div className="meal-result">
            <h2 className="title">Your Search Results:</h2>
            <div id="meal" class="container1">
              {/* Display meals here */}
              {meals.map(meal => (
        <div key={meal._id} className="embed">
          <h2>{meal.RecipeName}</h2>
          <p>Ingredients: {meal.Ingredients}</p>
          <p>Instructions: {meal.TranslatedInstructions}</p>
          <a href={meal.URL} target="_blank" rel="noopener noreferrer">Link to Recipe</a>
        </div>))}
            </div>
          </div>

          <div className="meal-details">
            {/* Meal details */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
