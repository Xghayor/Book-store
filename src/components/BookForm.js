import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { getBooks, createNewBook } from '../Redux/books/booksSlice';
import './styles/BookForm.css';

const BookForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBook = {
      item_id: uuidv4(),
      title: e.target.title.value,
      category: e.target.category.value,
      author: e.target.author.value,
    };

    await dispatch(createNewBook(newBook));
    dispatch(getBooks());
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input type="text" name="title" placeholder="Book Name" required />
        <div className="form-category">
          <select className="form-select" name="category" required>
            <option value="">Select Category</option>
            <option value="Action">Action</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Horror">Horror</option>
            <option value="Fantasy">Fantasy</option>
          </select>
        </div>
        <input type="text" name="author" placeholder="Author" required />
        <button type="submit">Add Book</button>
      </div>
    </form>
  );
};

export default BookForm;
