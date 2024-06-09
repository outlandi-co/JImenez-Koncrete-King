import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Menu.css';


function Menu() {
  return (
    <div className="menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Menu;
