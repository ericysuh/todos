/* eslint-disable no-param-reassign */
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
    editTodo: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.todoId);
      state[index].text = action.payload.newText;
    },
    removeCompletedTodos: (state) => state.filter((item) => !item.completed)
  }
});

export default todosSlice.reducer;
export const {
  addTodo, toggleTodo, removeTodo, removeCompletedTodos, editTodo
} = todosSlice.actions;
