import { useState, useEffect } from 'react';

import Todo from './models/todo';

import TodoList from './comps/TodoList/TodoList';
import Input from './comps/Input/Input';

import './App.css';

function App() {

  const [todos, setTodos] = useState<Todo[]>(
    [
    { id: 1, name: 'finish TS-project' },
    { id: 2, name: 'dinner with V' },
    { id: 3, name: 'go to the gym' },
  ]);

  const addTodo = (val: string):void => {
    setTodos([{ id: todos.length + 1, name: val }, ...todos]);
  }

  const removeTodo = (id: number):void => {
    setTodos(todos.filter(todo => todo.id !== id));
  }
    
  return (
    <div className="App">
      <h3 className='title'>TypeScript ToDo's :)</h3>
      <h5 className='subtitle'>type to add a new task</h5>
      <Input addTodo={addTodo} />
      <TodoList removeTodo={removeTodo} todos={todos} />
    </div>
  );
}

export default App;
