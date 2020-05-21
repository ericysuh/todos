import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './TodoItem.scss';

const TodoItem = (props) => {
  const { text } = props;
  return (
    <div className="todo-item">
      <input className="todo-item__toggle" type="checkbox" />
      <li className="todo-item__label">{text}</li>
      <button className="todo-item__delete" type="button">X</button>
    </div>
  );
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired
};

export default TodoItem;
