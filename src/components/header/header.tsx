import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        DESIGN CART
      </div>
      <div className="header-search">
        SEARCH
      </div>
      <div className="header-links">
        <div className="single-header-link">
          LOGIN
        </div>
        <div className="single-header-link">
          SIGNUP
        </div>
        <div className="single-header-link">
          CART
        </div>
        
      </div>
    </div>
  );
}

export default Header;