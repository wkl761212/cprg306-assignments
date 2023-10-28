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
            <div>
            <h1 className="m-4 text-3xl font-bold">Meal Ideas</h1>
            <h2 className="m-4 text-m ">Here are some meal ideas using {ingredient}: </h2>
            <ul>
                {meals.map((meal) => (
                    <li className="border border-sky-500 hover:bg-sky-500 bg-yellow-100 w-full max-w-xs m-2 p-2 rounded cursor-pointer" 
                    key={meal.idMeal} >
                        {meal.strMeal}
                    </li>
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


  

