import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoFilter from '../TodoFilter/TodoFilter';

import './TodoFooter.scss';

const mapState = (state) => {
  const activeTodos = state.todos.filter((todo) => !todo.completed);

  return {
    numOfActive: activeTodos.length,
    list: state.filters.list,
    visibility: state.filters.visibility
  };
};

const TodoFooter = ({ numOfActive, list, visibility }) => (
  <div className="todo-footer">
    <span className="todo-footer__count">{numOfActive} item left</span>
    <ul className="todo-footer__filters">
      {list.map((item) => {
        const selected = (item.type === visibility);
        return <TodoFilter type={item.type} key={`filter-${item.type}`} selected={selected} />;
      })}
    </ul>
  </div>
);

TodoFooter.propTypes = {
  numOfActive: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  visibility: PropTypes.oneOf(['all', 'active', 'completed']).isRequired
};

export default connect(mapState)(TodoFooter);
