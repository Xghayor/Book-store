import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBooks } from '../Redux/books/booksSlice';
import './styles/BookCategory.css';

const BookCategory = () => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const filterBooks = (event) => {
    const selectedCategory = event.target.value;
    dispatch(updateBooks(selectedCategory));
  };

  return (
    <div className="book-category">
      <select className="category-select" onChange={filterBooks}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BookCategory;
