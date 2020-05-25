import { createSelector } from '@reduxjs/toolkit';

const getTodos = (state) => state.todos;
const getFilters = (state) => state.filters;

const getVisibility = createSelector(
  [getFilters],
  (filters) => filters.visibility
);

const getActiveTodos = createSelector(
  [getTodos],
  (todos) => todos.filter((todo) => !todo.completed)
);

const getCompletedTodos = createSelector(
  [getTodos],
  (todos) => todos.filter((todo) => todo.completed)
);

export const getTodosState = createSelector(
  [getVisibility, getTodos, getActiveTodos, getCompletedTodos],
  (visibility, todos, activeTodos, completedTodos) => {
    switch (visibility) {
      case 'all':
        return todos;
      case 'active':
        return activeTodos;
      case 'completed':
        return completedTodos;
      default:
        throw new Error('unknown filter');
    }
  }
);

export const getFiltersState = createSelector(
  [getFilters],
  (filters) => filters
);

export const getNumOfActiveItems = createSelector(
  [getActiveTodos],
  (activeTodos) => activeTodos.length
);

export const getHasCompleted = createSelector(
  [getCompletedTodos],
  (completedTodos) => completedTodos.length > 0
);
