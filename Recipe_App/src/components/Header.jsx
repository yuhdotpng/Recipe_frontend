import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
const handleLogout = () => {
    logout();
    navigate('/');
    };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="app-title">Placeholder Name</Link>
        <nav className="nav-links">
          <Link to="/recipes" className="nav-link">Recipes</Link>
          <Link to="/favorites" className="nav-link">Favorites</Link>
          <Link to="/cooklist" className="nav-link">Cook Later</Link>
          {/* NEED TO ADD USER AUTH*/}
        </nav>
      </div>
    </header>
  );
};

export default Header;