import { configureStore } from '@reduxjs/toolkit';
import TodosReducer from './todosSlice';

const store = configureStore({
  reducer: {
    todos: TodosReducer
  }
});

export default store;
