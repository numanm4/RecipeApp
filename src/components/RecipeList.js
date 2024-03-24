

import React from 'react';

function RecipeList({ recipes, onRecipeClick }) {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe-item" onClick={() => onRecipeClick(recipe)}>
          <img src={recipe.image} alt={recipe.title} />
          <h3>{recipe.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
