import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: uuidv4(), text: action.payload, completed: false });
    }
  }
});

export default todosSlice.reducer;
export const { addTodo } = todosSlice.actions;
