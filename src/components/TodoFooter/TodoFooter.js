import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFiltersState } from '../../redux/selectors';
import ActiveTodosCount from './components/ActiveTodosCount/ActiveTodosCount';
import TodoFilter from './components/TodoFilter/TodoFilter';
import ClearCompleted from './components/ClearCompleted/ClearCompleted';

import './TodoFooter.scss';

const mapState = (state) => ({
  filterList: getFiltersState(state).list,
  visibility: getFiltersState(state).visibility,
  hasTodos: state.todos.length > 0,
});

const TodoFooter = ({
  filterList, visibility, hasTodos,
}) => {
  if (!hasTodos) return null;

  return (
    <div className="todo-footer">
      <ActiveTodosCount />
      <ul className="todo-footer__filters">
        {filterList.map((item) => {
          const selected = (item.type === visibility);
          return <TodoFilter {...item} key={`filter-${item.type}`} selected={selected} />;
        })}
      </ul>
      <ClearCompleted />
    </div>
  );
};

TodoFooter.propTypes = {
  filterList: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  visibility: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  hasTodos: PropTypes.bool.isRequired
};

export default connect(mapState)(TodoFooter);
