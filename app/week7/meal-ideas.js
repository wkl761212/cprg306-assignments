"use client";

import { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  }
  
  export default function MealIdeas({ ingredient }) {
    
    const [meals, setMeals] = useState([]);
  
    
    async function loadMealIdeas() {
      setMeals(await fetchMealIdeas(ingredient));
    }
  
    useEffect(() => {
      loadMealIdeas();
    }, [ingredient]);

    function display() {
      if (!ingredient) {
          return <p>Select an item to see meal ideas</p>;
      }
      else if (meals.length === 0) {
          return (
              <p>No meal ideas found for {ingredient}</p>
          )
      }
      else {
          return (
              <div className="border border-sky-500 hover:bg-sky-500 bg-yellow-100 w-full max-w-xs m-4 p-2 rounded cursor-pointer">
                  <h1 class="text-2xl font-bold">Meal Ideas for {ingredient}</h1>
                  <ul>
                      {meals.map((meal) => (
                          <li key={meal.idMeal}>{meal.strMeal}</li>
                      ))}
                  </ul>
              </div>
          )
      }
  }

    return (
      <div>
        {display()}
      </div>
    );
  }


  

