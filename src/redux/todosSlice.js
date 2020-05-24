import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: uuidv4(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((item) => item.id === action.payload);
      todo.completed = !todo.completed;
    },
    removeTodo: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
    removeCompletedTodos: (state) => (
      // for (let i = state.length - 1; i >= 0; i--) {
      //   if (state[i].completed) state.splice(i, 1);
      // }
      state.filter((item) => !item.completed)
    )
  }
});

export default todosSlice.reducer;
export const {
  addTodo, toggleTodo, removeTodo, removeCompletedTodos
} = todosSlice.actions;
