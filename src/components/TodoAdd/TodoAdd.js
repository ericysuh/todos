import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '../../redux/todosSlice';
import './TodoAdd.scss';

const mapDispatch = { addTodo };

const TodoAdd = ({ addTodo }) => {
  const [text, setText] = useState('');
  const handleInput = (event) => setText(event.target.value);
  const handleEnter = (event) => {
    if (event.keyCode !== 13) return;
    const text = event.target.value;
    addTodo(text);
    setText('');
  };
  return (
    <input
      className="todo-add"
      type="text"
      placeholder="What needs to be done?"
      onChange={handleInput}
      onKeyUp={handleEnter}
      value={text}
    />
  );
};

TodoAdd.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default connect(null, mapDispatch)(TodoAdd);
