import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: 'San%20Diego',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    newQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { newQuery } = weatherSlice.actions;

export default weatherSlice.reducer;
