import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { toggleTodo, removeTodo, editTodo } from '../../../../redux/todosSlice';

import './TodoItem.scss';

const mapDispatch = { toggleTodo, removeTodo, editTodo };

const TodoItem = ({
  text, toggleTodo, removeTodo, id, completed, editTodo
}) => {
  const handleCheckboxClick = () => {
    toggleTodo(id);
  };

  const handleDeleteBtnClick = () => {
    removeTodo(id);
  };

  const handleKeyUp = (event) => {
    if (event.keyCode !== 13) return;
    editTodo({ todoId: id, newText: event.target.value });
  };

  const todoLabelClass = classNames('todo-item__label', {
    'todo-item__label--completed': completed
  });

  return (
    <li className="todo-item">
      <input className="todo-item__toggle" type="checkbox" onClick={handleCheckboxClick} />
      <input className={todoLabelClass} defaultValue={text} onKeyUp={handleKeyUp} />
      <button className="todo-item__delete" type="button" onClick={handleDeleteBtnClick}>X</button>
    </li>
  );
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

export default connect(null, mapDispatch)(TodoItem);
