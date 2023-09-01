import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';
import userIcon from '../assets/user.png';

const isLinkDisabled = true;

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">BOOKSTORE CMS</div>
    <ul className="nav-links">
      <li><Link to="/">BOOKS</Link></li>
      <li>
        {isLinkDisabled ? (
          <span className="disabled-link">CATEGORIES</span>
        ) : (
          <Link to="/categories">CATEGORIES</Link>
        )}
      </li>
      <li><img src={userIcon} alt="User Icon" className="user-icon" /></li>
    </ul>
  </nav>
);

export default Navbar;
