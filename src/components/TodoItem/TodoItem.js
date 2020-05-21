import React from 'react';

import './TodoItem.scss';

const TodoItem = () => (
  <div className="todo-item">
    <input className="todo-item__toggle" type="checkbox" />
    <li className="todo-item__label">Todo Items</li>
    <button className="todo-item__delete" type="button">X</button>
  </div>
);

export default TodoItem;
