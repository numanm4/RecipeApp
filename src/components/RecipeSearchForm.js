
import React, { useEffect, useState } from 'react';
import { searchRecipes } from '../services/RecipeService';

function RecipeSearchForm() {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    try {
      const recipes = await searchRecipes(ingredients);
      setRecipes(recipes);
    } catch (error) {
      console.error('Error searching recipes:', error);
      setRecipes([]);
    }
  };

  useEffect(() => {
   
    searchRecipes('chicken,onion,tomato')
      .then(recipes => {
        console.log('Found recipes:', recipes);
        setRecipes(recipes);
      })
      .catch(error => {
        console.error('Error searching recipes:', error);
        setRecipes([]);
      });
  }, []);

  return (
    <div>
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeSearchForm;
