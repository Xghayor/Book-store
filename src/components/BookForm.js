import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ onAddBook }) => {
  const [category, setCategory] = useState('');
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      category,
      bookName,
      author,
    };

    onAddBook(newBook);

    setCategory('');
    setBookName('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      </div>
      <div>
        <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} placeholder="Book Name" />
      </div>
      <div>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

BookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default BookForm;
