import React from 'react';
import TodoFilter from '../TodoFilter/TodoFilter';

import './TodoFooter.scss';

const TodoFooter = () => (
  <div className="todo-footer">
    <span className="todo-footer__count">1 item left</span>
    <ul className="todo-footer__filters">
      <TodoFilter />
    </ul>
  </div>
);


export default TodoFooter;
