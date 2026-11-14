import RecipeCard from './RecipeCard';

function RecipeGrid({ recipes }) {
  return (
    <div className="recipe-grid">
      {recipes.map(recipe => (
        <MovieCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default MovieGrid;