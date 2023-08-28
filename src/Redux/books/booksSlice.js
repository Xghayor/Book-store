import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    added: (state, action) => {
      state.push(action.payload);
    },

    updateBooks: (state, action) => state.filter((book) => book.id !== action.payload),
  },
});

export default bookSlice.reducer;
export const { added, updateBooks } = bookSlice.actions;
