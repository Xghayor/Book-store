import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['All', 'Action', 'Drama', 'Mystery', 'Sci-Fi', 'Fantasy', 'Cinematic'],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
  },
});

export default categoriesSlice.reducer;
