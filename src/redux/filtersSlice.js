import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visibility: 'all',
  list: [
    { type: 'all' },
    { type: 'active' },
    { type: 'completed' }
  ]
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.visibility = action.payload;
    }
  }
});

export default filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
