import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { getBooks, createNewBook } from '../Redux/books/booksSlice';
import './styles/BookForm.css';

const BookForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/IfJm8IrVNYBvy5mLAJXh/books';

    const newBook = {
      item_id: uuidv4(),
      title: e.target.title.value,
      category: e.target.category.value,
      author: e.target.author.value,
    };

    await dispatch(createNewBook(url, newBook));
    dispatch(getBooks());
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div>
        <input type="text" name="title" placeholder="Book Name" required />
      </div>
      <div>
        <input type="text" name="category" placeholder="Category" required />
      </div>
      <div>
        <input type="text" name="author" placeholder="Author" required />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
