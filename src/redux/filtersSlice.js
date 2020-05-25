/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visibility: 'all',
  list: [
    { copy: 'All', type: 'all' },
    { copy: 'Active', type: 'active' },
    { copy: 'Completed', type: 'completed' }
  ]
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.visibility = action.payload;
    }
  }
});

export default filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
