import { Link } from 'react-router-dom';

function Header() {
const handleLogout = () => {
    logout();
    navigate('/');
    };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="app-title">MovieShelf</Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/favorites" className="nav-link">Favorites</Link>
          <div className="nav-user">
          <div className="auth-section">
          {isAuthenticated ? (
            <div className="user-info">
              <span className="username"> Placeholder Username </span>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="login-link">
              Login
            </Link>
          )}
        </div>
        </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;