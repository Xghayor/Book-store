import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import { getBooks, removeBook } from '../Redux/books/booksSlice';
import BookCategory from './BookCategory';
import ChapterCounter from './ChapterCounter';
import './styles/BookList.css';

const getRandomChapter = () => Math.floor(Math.random() * 30) + 1;

const BookList = () => {
  const { loading, books, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleRemoveBook = async (key) => {
    await dispatch(removeBook(key));
    dispatch(getBooks());
  };

  if (loading) {
    return (
      <div className="loading-design">
        <div className="loading-spinner" />
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="book-list">
      <div>
        <BookCategory />
      </div>
      <div className="book-grid">
        {Object.keys(books).map((key) => (
          books[key].map((book, index) => (
            <div key={book.item_id} className="book-row">
              <div className="book-container">
                <div className="book-chapter-container">
                  <Book
                    category={book.category}
                    bookName={book.title}
                    author={book.author}
                    onRemove={() => handleRemoveBook(key)}
                  />
                </div>
              </div>
              <div className="chapter-container">
                <ChapterCounter book={index + 30} chapter={getRandomChapter()} />
              </div>
            </div>
          ))
        ))}
      </div>
      <BookForm />
    </div>
  );
};

export default BookList;
