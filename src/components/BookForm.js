import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { added } from '../Redux/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      category: e.target.category.value,
      bookName: e.target.bookName.value,
      author: e.target.author.value,
    };

    dispatch(added(newBook));

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="category" placeholder="Category" required />
      </div>
      <div>
        <input type="text" name="bookName" placeholder="Book Name" required />
      </div>
      <div>
        <input type="text" name="author" placeholder="Author" required />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
