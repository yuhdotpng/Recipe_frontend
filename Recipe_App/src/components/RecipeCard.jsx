import { useState, useEffect } from 'react';
import { useWatchlist } from '../contexts/MovieContext';

function RecipeCard({ recipe }) {

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipe')) || [];
    const isRecipeFavorite = favorites.some(fav => fav.id === recipe.id);
    setIsFavorite(isRecipeFavorite);
  }, [recipe.id]);


  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipe')) || [];
    
    if (isFavorite) {
      const updatedFavorites = favorites.filter(fav => fav.id !== recipe.id);
      localStorage.setItem('favoriteRecipe', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(recipe);
      localStorage.setItem('favoriteRecipe', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  const {addToWatchlist, removeFromWatchlist, isInWatchlist} = useWatchlist();
  const inWatchlist = isInWatchlist(recipe.id);

  const handleWatchlistClick= () => {
    if (inWatchlist) {
      removeFromWatchlist(recipe.id);
    } else {
      addToWatchlist(recipe);
    }
  };

  return (
    <div className="recipe-card">
      <div className="recipe-poster">
        <img 
          src={`https://image.tmdb.org/t/p/w500${recipe.poster_path}`}
          alt={recipe.title}
        />
      </div>
      <div className="recipe-info">
        <h3 className="recipe-title">{recipe.title}</h3>
        <div className="recipe-details">
          <span className="recipe-rating">⭐ {recipe.vote_average}</span>
          <span className="recipe-year">{recipe.release_date.substring(0, 4)}</span>
        </div>
        <button className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
          onClick={toggleFavorite}>
            {isFavorite ? '♥ Remove from Favorites' : '♡ Add to Favorites'}
          </button>
        <button className={`watchlist-button ${inWatchlist ? 'watchlisted' : ''}`}
          onClick={handleWatchlistClick}>
            {inWatchlist ? 'Remove from Watchlist' : 'Add To Watchlist'}
          </button>
      </div>
    </div>
  );
};

export default RecipeCard;