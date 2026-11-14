import RecipeGrid from '../components/RecipeGrid';
import {getRecipes} from '../services/recipeService';
import { useState, useEffect } from 'react';
import './Recipes.css'

function RecipePage({searchResults, onSearch}) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  useEffect(() => {
	// Define a second async function to invoke our service function
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        setError(null);
        const recipeData = await getRecipes();
        setRecipes(recipeData);
      } catch (err) {
        setError('Failed to load recipes. Please try again later.');
        setRecipes([]); // Set to empty array to prevent map errors
      } finally {
        setLoading(false);
      }
    };
	// Immediately call the service function
  fetchRecipes();
  }, []); // Empty dependency array
  const displayRecipes = searchResults || recipes;

  return (
    <main className="main-content">
      <div className="content-header">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search recipes..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="search-button" onClick={handleSearch}>
            Search</button>
        </div>
        <h2>{searchResults ? 'Search Results' : 'Popular Recipes'}</h2>
        <p>Discover and save your favorite recipes</p>
      </div>
      <RecipeGrid recipes={displayRecipes} />
    </main>
  );
};

export default RecipePage;