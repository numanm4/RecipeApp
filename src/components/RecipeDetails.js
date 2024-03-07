import React from 'react';
import '../styles/RecipeDetails.css';

function RecipeDetails({ recipe, onClose }) {
  console.log(recipe); 

  if (!recipe) {
    return null;
  }

  return (
    <div className="recipe-details"> 
      <button onClick={onClose} className="close-btn">Close</button> 
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.usedIngredients.map(ingredient => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetails;