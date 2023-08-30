import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import { removed } from '../Redux/books/booksSlice';
import BookCategory from './BookCategory';
import ChapterCounter from './ChapterCounter';

const getRandomChapter = () => Math.floor(Math.random() * 30) + 1;

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
      {books.map((book, index) => (
        <div key={book.id}>
          <Book
            category={book.category}
            bookName={book.title}
            author={book.author}
            onRemove={() => handleRemoveBook(book.id)}
          />
          <ChapterCounter book={index + 30} chapter={getRandomChapter()} />
        </div>
      ))}
      <BookForm />
    </div>
  );
};

export default BookList;
