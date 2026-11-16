import { useState, useEffect } from 'react';
import RecipeGrid from '../components/RecipeGrid';

function CookList() {
  const [cookList, setCookList] = useState([]);

  useEffect(() => {
    const cookListed = JSON.parse(localStorage.getItem('cookList')) || [];
    setCookList(cookListed);
  }, []);

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>My Cook List</h2>
        <p>Recipes you plan to cook</p>
      </div>
      {cookList.length > 0 ? (
        <RecipeGrid recipes={cookList} />
      ) : (
        <div className="empty-state">
          <p>No recipes you're planning to make. Start adding some from the recipe page!</p>
        </div>
      )}
    </main>
  );
};

export default CookList;