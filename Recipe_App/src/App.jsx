import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import CookList from './pages/CookList';
import Favorites from './pages/Favorites';
import { searchRecipes } from './services/recipeService';
import './App.css';
import { CookListProvider } from './contexts/RecipeContext';
import RecipePage from './pages/Recipes';

function App() {
  // Create search state
  const [searchResults, setSearchResults] = useState(null); 
  // Handler function to query search
  const handleSearch = async (query) => { 
    const results = await searchRecipes(query); 
    setSearchResults(results); 
  }; 
  return (
    <CookListProvider>
      <Router>
        <div className="app">
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/recipes" element={<RecipePage onSearch= {handleSearch} searchResults={searchResults}/>} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/cooklist" element={<CookList />} />
          </Routes>
        </div>
      </Router>
    </CookListProvider>
  );
};

export default App;