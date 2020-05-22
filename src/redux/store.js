import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import TodosReducer from './todosSlice';
import FiltersReducer from './filtersSlice';
import { saveState, loadState } from '../utilities/localStorage';


const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (result.type.includes('todos/')) {
    saveState(store.getState());
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
  preloadedState: loadState()
});

export default store;
