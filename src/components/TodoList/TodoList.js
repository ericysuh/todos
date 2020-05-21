import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

import './TodoList.scss';

const mapState = (state) => ({
  todos: state.todos
});

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
