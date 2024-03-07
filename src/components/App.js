import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import '../styles/App.css';
import { searchRecipes } from '../services/RecipeService';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = async () => {
    console.log('Searching recipes...');
    try {
      const recipes = await searchRecipes(searchInput);
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

  const handleRecipeClick = (recipe) => {
    console.log('Clicked recipe:', recipe);
    setSelectedRecipe(recipe);
  };

  return (
    <div className="App">
      <h1>Recipe Search Engine</h1>
      <div>
        <input
          type="text"
          placeholder="Enter ingredients separated by commas"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {recipes.length > 0 && <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />}
      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />}
    </div>
  );
}

export default App; 