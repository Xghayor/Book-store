import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  category, bookName, author, onRemove,
}) => (
  <div className="book">
    <div className="category"><strong>{category}</strong></div>
    <div className="book-details">
      <div className="book-name">{bookName}</div>
      <div className="author">{author}</div>
    </div>
    <button type="button" className="remove-button" onClick={onRemove}>
      Remove
    </button>
  </div>
);

Book.propTypes = {
  category: PropTypes.string.isRequired,
  bookName: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Book;
