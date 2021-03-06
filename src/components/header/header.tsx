import React from 'react';
import './header.css';
import Search from '../../assets/search-icon.png'
import DesignCartLogo from '../../assets/designCart-logo.png'

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img className="designcart-img" alt="DesignCart" src={DesignCartLogo}></img>
      </div>
      <div className="header-search">
        <input placeholder="Search for products" className="search-input"/>
        <button className="search-button"><img src={Search} alt="Search" className="search-img"></img></button>
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