import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import { updateBooks } from '../Redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (bookId) => {
    dispatch(updateBooks(bookId));
  };

  return (
    <div className="book-list">
      <h2>Book List</h2>
      <div>
        <h3>Add New Book</h3>
        <BookForm />
      </div>
      {books.map((book) => (
        <Book
          key={book.id}
          category={book.category}
          bookName={book.bookName}
          author={book.author}
          onRemove={() => handleRemoveBook(book.id)}
        />
      ))}
    </div>
  );
};

export default BookList;
