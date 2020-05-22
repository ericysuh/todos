import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { toggleTodo, removeTodo } from '../../redux/todosSlice';

import './TodoItem.scss';

const mapDispatch = { toggleTodo, removeTodo };

const TodoItem = (props) => {
  const {
    text, toggleTodo, removeTodo, id, completed
  } = props;

  const handleToggle = () => {
    toggleTodo(id);
  };

  const handleDelete = () => {
    removeTodo(id);
  };

  const todoLabelClass = classNames('todo-item__label', {
    'todo-item__label--completed': completed
  });

  return (
    <li className="todo-item">
      <input className="todo-item__toggle" type="checkbox" onClick={handleToggle} />
      <input className={todoLabelClass} defaultValue={text} />
      <button className="todo-item__delete" type="button" onClick={handleDelete}>X</button>
    </li>
  );
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

export default connect(null, mapDispatch)(TodoItem);
