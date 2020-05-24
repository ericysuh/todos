import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeCompletedTodos } from '../../redux/todosSlice';
import { getNumOfCompleted } from '../../redux/selectors';
import './ClearCompleted.scss';

const mapState = (state) => ({
  completedTodos: getNumOfCompleted(state)
});

const mapDispatch = { removeCompletedTodos };

const ClearCompleted = ({ completedTodos, removeCompletedTodos }) => {
  if (!completedTodos) return null;
  const handleClick = (event) => {
    event.preventDefault();
    removeCompletedTodos();
  };

  return (
    <a className="clear-completed" href="/" target="_blank" onClick={handleClick}>Clear completed</a>
  );
};

ClearCompleted.propTypes = {
  completedTodos: PropTypes.number.isRequired,
  removeCompletedTodos: PropTypes.func.isRequired
};

export default connect(mapState, mapDispatch)(ClearCompleted);
