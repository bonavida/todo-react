import React, { useState } from 'react';

import TodoList from 'components/TodoList';

import './App.scss';
import AddTodoItem from 'components/AddTodoItem/AddTodoItem';

const initialItems = [
  { id: 1, value: "Learn React", done: false },
  { id: 2, value: "Go shopping", done: true },
  { id: 3, value: "Buy flowers", done: true },
];

function App() {
  const [items, setItems] = useState(initialItems);

  const addItem = itemValue => {
    const newItem = {
      id: items.length + 1,
      value: itemValue,
      done: false
    };
    const todoItems = [ ...items, newItem ];
    setItems(todoItems);
  }

  const removeItem = itemId => {
    const todoItems = items.filter(item => item.id !== itemId);
    setItems(todoItems);
  }

  const toggleTodoDone = itemId => {
    const todoItems = [ ...items ];
    const todoItem = todoItems.find(item => item.id === itemId);
    if (todoItem) {
      todoItem.done = !todoItem.done;
      setItems(todoItems);
    }
  }

  return (
    <div className="App">
      <h1>React ToDo List</h1>
      <AddTodoItem addItem={addItem} />
      <TodoList
        items={items}
        removeItem={removeItem}
        toggleTodoDone={toggleTodoDone}
      />
    </div>
  )
}

export default App;
