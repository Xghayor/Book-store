import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">BOOKSTORE CMS</div>
    <ul className="nav-links">
      <li><Link to="/books">BOOKS</Link></li>
      <li><Link to="/categories">CATEGORIES</Link></li>
    </ul>
  </nav>
);

export default Navbar;
