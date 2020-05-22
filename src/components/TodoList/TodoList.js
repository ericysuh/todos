import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

import './TodoList.scss';

// const mapState = (state) => ({
//   todos: state.todos
// });

const mapState = (state) => {
  let filteredTodos;
  if (state.filters.visibility === 'completed') {
    filteredTodos = state.todos.filter((todo) => todo.completed);
  } else if (state.filters.visibility === 'active') {
    filteredTodos = state.todos.filter((todo) => !todo.completed);
  } else {
    filteredTodos = state.todos;
  }
  return {
    todos: filteredTodos
  };
};

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};

export default connect(mapState)(TodoList);
