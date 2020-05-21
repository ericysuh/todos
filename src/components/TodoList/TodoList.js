import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

import './TodoList.scss';

const TodoList = () => (
  <ul className="todo-list">
    <TodoItem />
    <TodoItem />
    <TodoItem />
  </ul>
);
export default TodoList;
