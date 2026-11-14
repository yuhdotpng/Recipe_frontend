const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

export async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }
  
  const data = await response.json();
  return data.results;
};

export async function searchRecipes(query) {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`
    );
  if (!response.ok) {
    throw new Error('Failed to search recipes');
  }
  
  const data = await response.json();
  return data.results;
};