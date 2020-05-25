import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import TodosReducer from './todosSlice';
import FiltersReducer from './filtersSlice';
import { saveState, loadState } from '../utilities/localStorage';

const TODOS_LOCAL_STORAGE_KEY = 'todosList';

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (result.type.includes('todos/')) {
    saveState(store.getState().todos, TODOS_LOCAL_STORAGE_KEY);
  }
  return result;
};

const middleware = [...getDefaultMiddleware(), localStorageMiddleware];

const store = configureStore({
  reducer: {
    todos: TodosReducer,
    filters: FiltersReducer
  },
  middleware,
  preloadedState: {
    todos: loadState(TODOS_LOCAL_STORAGE_KEY)
  }
});

export default store;
