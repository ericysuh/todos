import React from 'react';
import TodoAdd from '../TodoAdd/TodoAdd';
import TodoList from '../TodoList/TodoList';
import TodoFooter from '../TodoFooter/TodoFooter';

import './App.scss';

const App = () => (
  <>
    <h1>todos</h1>
    <section className="todo">
      <TodoAdd />
      <TodoList />
      <TodoFooter />
    </section>
  </>
);

export default App;
