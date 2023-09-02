import React from 'react';
import PropTypes from 'prop-types';
import './styles/Book.css';

const Book = ({
  category, bookName, author, onRemove, component,
}) => (
  <div className="book">
    <div className="category">{category}</div>
    <div className="book-details">
      <div className="book-name">{bookName}</div>
      <div className="author">{author}</div>
      <div className="remove-button-container">
        <button type="button" className="remove-button" onClick={onRemove}>
          Remove
        </button>
      </div>
      <div className="component-container">{component}</div>
    </div>
  </div>

);

Book.propTypes = {
  category: PropTypes.string.isRequired,
  bookName: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  component: PropTypes.func.isRequired,
};

export default Book;
