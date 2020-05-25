import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '../../redux/todosSlice';
import './TodoAdd.scss';

const mapDispatch = { addTodo };

const TodoAdd = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => setText(event.target.value);

  const handleKeyUp = (event) => {
    if (!text.length || event.key !== 'Enter') return;
    addTodo(text);
    setText('');
  };

  return (
    <input
      className="todo-add"
      type="text"
      placeholder="What needs to be done?"
      onChange={handleChange}
      onKeyUp={handleKeyUp}
      value={text}
    />
  );
};

TodoAdd.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default connect(null, mapDispatch)(TodoAdd);
