import { createContext, useState, useContext, useEffect } from 'react';

// 1. Create the Context
const CookListContext = createContext();

// 2. Create a custom hook for consuming the Context
export function useCookList() {
  const context = useContext(CookListContext);
  if (!context) {
    throw new Error('useCookList must be used within cookListProvider');
  }
  return context;
};

// 3. Create the Provider component
export function CookListProvider({ children }) {
  // Initialize state from localStorage 
  const [cookList, setCookList] = useState(() => {
    const saved = localStorage.getItem('cookList');
    return saved ? JSON.parse(saved) : [];
  });

   
  useEffect(() => { 
    localStorage.setItem('cookList', JSON.stringify(cookList)); 
  }, [cookList]);

  const addToCookList = (recipe) => {
    if (!cookList.some(r => r.id === recipe.id)) {
      setCookList(prev => [...prev, recipe]);
    }
  };

  const removeFromCookList = (recipeId) => {
    setCookList(prev => prev.filter(recipe => recipe.id !== recipeId));
  };

  const isInCookList = (recipeId) => {
    return cookList.some(recipe => recipe.id === recipeId);
  };

  const value = {
    cookList,
    addToCookList,
    removeFromCookList,
    isInCookList
  };

  return (
    <CookListContext.Provider value={value}>
      {children}
    </CookListContext.Provider>
  );
};