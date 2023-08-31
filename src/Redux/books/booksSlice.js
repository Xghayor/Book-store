import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/IfJm8IrVNYBvy5mLAJXh/books';

const initialState = {
  loading: false,
  books: [],
  error: '',
};

const getBooks = createAsyncThunk('books/fetchBooks', async () => axios.get(url)
  .then((response) => response.data)
  .catch((error) => {
    throw error;
  }));

const removeBook = createAsyncThunk('books/removeBook', async (bookId) => axios.delete(`${url}/${bookId}`)
  .then((response) => response.data)
  .catch((error) => {
    throw error;
  }));

const createNewBook = createAsyncThunk(
  'books/createNewBook',
  async (url, newBook) => {
    const response = await axios.post(url, newBook);
    return response.data;
  },
);

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    updateBooks: (state, action) => {
      const { books } = state;

      if (action.payload === 'All') {
        return { ...state };
      }

      const filtered = {};

      Object.keys(books).forEach((key) => {
        filtered[key] = books[key].filter((book) => book.category === action.payload);
      });

      return {
        books: filtered,
      };
    },

  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      state.loading = false;
      state.books = [];
      state.error = action.error.message;
    });
  },
});

export default bookSlice.reducer;
export const { added, removed, updateBooks } = bookSlice.actions;
export { getBooks, removeBook, createNewBook };
