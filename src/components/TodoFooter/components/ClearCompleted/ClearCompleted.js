import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeCompletedTodos } from '../../../../redux/todosSlice';
import { getHasCompleted } from '../../../../redux/selectors';
import './ClearCompleted.scss';

const mapState = (state) => ({
  hasCompletedTodos: getHasCompleted(state)
});

const mapDispatch = { removeCompletedTodos };

const ClearCompleted = ({ hasCompletedTodos, removeCompletedTodos }) => {
  if (!hasCompletedTodos) return null;

  const handleClick = (event) => {
    event.preventDefault();
    removeCompletedTodos();
  };

  return (
    <a className="clear-completed" href="/" onClick={handleClick}>Clear completed</a>
  );
};

ClearCompleted.propTypes = {
  hasCompletedTodos: PropTypes.number.isRequired,
  removeCompletedTodos: PropTypes.func.isRequired
};

export default connect(mapState, mapDispatch)(ClearCompleted);
