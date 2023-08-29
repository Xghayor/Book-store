import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import { removed } from '../Redux/books/booksSlice';
import BookCategory from './BookCategory';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (bookId) => {
    dispatch(removed(bookId));
  };

  return (
    <div className="book-list">
      <h2>Book List</h2>
      <div>
        <BookCategory />
      </div>
      {books.map((book) => (
        <Book
          key={book.id}
          category={book.category}
          bookName={book.title}
          author={book.author}
          onRemove={() => handleRemoveBook(book.id)}
        />
      ))}
      <BookForm />
    </div>
  );
};

export default BookList;
