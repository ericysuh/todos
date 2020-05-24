import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFiltersState, getNumOfActiveItems } from '../../redux/selectors';
import TodoFilter from '../TodoFilter/TodoFilter';
import ClearCompleted from '../ClearCompleted/ClearCompleted';

import './TodoFooter.scss';

const mapState = (state) => ({
  numOfActive: getNumOfActiveItems(state),
  list: getFiltersState(state).list,
  visibility: getFiltersState(state).visibility,
  todos: state.todos,
});

const TodoFooter = ({
  numOfActive, list, visibility, todos,
}) => {
  if (!todos.length) return null;
  return (
    <div className="todo-footer">
      <span className="todo-footer__count">{numOfActive} item left</span>
      <ul className="todo-footer__filters">
        {list.map((item) => {
          const selected = (item.type === visibility);
          return <TodoFilter type={item.type} key={`filter-${item.type}`} selected={selected} />;
        })}
      </ul>
      <ClearCompleted />
    </div>
  );
};

TodoFooter.propTypes = {
  numOfActive: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  visibility: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(mapState)(TodoFooter);
