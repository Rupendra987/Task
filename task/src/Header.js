import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg header">
      <div className="container">
        <a className="navbar-brand header-white-color" href="#">
          <span>Whitepace</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon header-white-color"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link header-white-color" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link header-white-color" href="#">Solutions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link header-white-color" href="#">Resources</a>
            </li>
            <li className="nav-item">
              <a className="nav-link header-white-color" href="#">Pricings</a>
            </li>
            <li className="nav-item">
                <button className="btn btn-primary button-yellow">Login</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary">Try Whitepace Free</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;