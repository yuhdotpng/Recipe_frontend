import { useState, useEffect } from 'react';
import { useCookList } from '../contexts/RecipeContext';
import './RecipeCard.css';

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

  const {addToCookList, removeFromCookList, isInCookList} = useCookList();
  const inCookList = isInCookList(recipe.id);

  const handleCookListClick= () => {
    if (inCookList) {
      removeFromCookList(recipe.id);
    } else {
      addToCookList(recipe);
    }
  };

  return (
    <div className="recipe-card">
      <div className="recipe-poster">
        <img 
          src={recipe.image}
          alt={recipe.title}
        />
      </div>
      <div className="recipe-info">
        <h3 className="recipe-title">
          <a href={`https://api.spoonacular.com/recipes/${recipe.id}/information`.sourceUrl}>
            {recipe.title}
          </a>
        </h3>
        <button className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
          onClick={toggleFavorite}>
            {isFavorite ? '♥ Remove from Favorites' : '♡ Add to Favorites'}
          </button>
        <button className={`cooklist-button ${inCookList ? 'cooklisted' : ''}`}
          onClick={handleCookListClick}>
            {inCookList ? 'Remove from Cook Later' : 'Add To Cook Later'}
          </button>
      </div>
    </div>
  );
};

export default RecipeCard;