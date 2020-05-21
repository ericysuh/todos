import React from 'react';

import './TodoFilter.scss';

const TodoFilter = () => (
  <section className="todo-filter">
    <a href="/" className="todo-filter__link">All</a>
    <a href="/" className="todo-filter__link">Active</a>
    <a href="/" className="todo-filter__link">Completed</a>
  </section>
);

export default TodoFilter;
