import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { changeFilter } from '../../redux/filtersSlice';
import './TodoFilter.scss';

const mapDispatch = { changeFilter };

const TodoFilter = (props) => {
  const { changeFilter, type, selected } = props;

  const handleClick = (event) => {
    event.preventDefault();
    changeFilter(type);
  };

  const filterLinkClass = classNames('todo-filter__link', {
    'todo-filter__link--selected': selected
  });

  return (
    <section className="todo-filter">
      <a href="/" className={filterLinkClass} onClick={handleClick}>{type}</a>
    </section>
  );
};

TodoFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired
};

export default connect(null, mapDispatch)(TodoFilter);
