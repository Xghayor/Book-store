import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Book from './Book';
import BookForm from './BookForm';
import { getBooks } from '../Redux/books/booksSlice';
import BookCategory from './BookCategory';
import ChapterCounter from './ChapterCounter';

const getRandomChapter = () => Math.floor(Math.random() * 30) + 1;

const BookList = () => {
  const { loading, books, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleRemoveBook = (key) => {
    const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/IfJm8IrVNYBvy5mLAJXh/books/${key}`;

    axios.delete(url)
      .then((response) => {
        console.log('Response:', response.data);
        dispatch(getBooks());
      })
      .catch((error) => {
        console.error('Failed to delete book:', error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
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
      <h2>Book List</h2>
      <div>
        <BookCategory />
      </div>
      {Object.keys(books).map((key) => (
        books[key].map((book, index) => (
          <div key={book.item_id}>
            <Book
              category={book.category}
              bookName={book.title}
              author={book.author}
              onRemove={() => handleRemoveBook(key)}
            />
            <ChapterCounter book={index + 30} chapter={getRandomChapter()} />
          </div>
        ))
      ))}
      <BookForm />
    </div>
  );
};

export default BookList;
