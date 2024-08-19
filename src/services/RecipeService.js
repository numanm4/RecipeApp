import axios from 'axios';

const apiKey = '53ca3b842f6a45ae969fa4e4068a456b';

export async function searchRecipes(ingredients) {
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodeURIComponent(ingredients)}&apiKey=${apiKey}`); // adding api
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
}
