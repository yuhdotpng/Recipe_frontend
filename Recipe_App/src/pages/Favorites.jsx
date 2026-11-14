import { useState, useEffect } from 'react';
import RecipeGrid from '../components/RecipeGrid';

function Favorites() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipe')) || [];
    setFavoriteRecipes(favorites);
  }, []);

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>My Favorites</h2>
        <p>Your saved recipess</p>
      </div>
      {favoriteRecipes.length > 0 ? (
        <RecipeGrid recipes={favoriteRecipes} />
      ) : (
        <div className="empty-state">
          <p>No favorite recipes yet. Check some out and see what looks good!</p>
        </div>
      )}
    </main>
  );
};

export default Favorites;