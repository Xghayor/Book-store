import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Action',
  },
  {
    id: uuidv4(),
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Action',
  },
  {
    id: uuidv4(),
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Cinematic',
  },
];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    added: (state, action) => [...state, action.payload],
    removed: (state, action) => state.filter((book) => book.id !== action.payload),
    updateBooks: (state, action) => (action.payload === 'All'
      ? initialState
      : initialState.filter((book) => book.category === action.payload)),
  },
});

export default bookSlice.reducer;
export const { added, removed, updateBooks } = bookSlice.actions;
