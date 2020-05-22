import { configureStore } from '@reduxjs/toolkit';
import TodosReducer from './todosSlice';
import FiltersReducer from './filtersSlice';

const store = configureStore({
  reducer: {
    todos: TodosReducer,
    filters: FiltersReducer
  }
});

export default store;
