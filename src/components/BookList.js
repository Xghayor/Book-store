import React, { useState } from 'react';
import Book from './Book';
import BookForm from './BookForm';

const BookList = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      category: 'Fiction',
      bookName: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
    },
  ]);

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div className="book-list">
      <h2>Book List</h2>
      <div>
        <h3>Add New Book</h3>
        <BookForm onAddBook={handleAddBook} />
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
