import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4';

import { getTodos, saveTodo, editTodo, deleteTodo } from 'services/todoService';
import { VisibilityFilters } from 'utils/constants';

import TodoList from 'components/TodoList';
import AddTodoItem from 'components/AddTodoItem';
import TodoFilter from 'components/TodoFilter';

import './App.scss';

const App = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState(VisibilityFilters.SHOW_ALL);

  // useEffect with an empty array as the second parameter equals to componentDidMount()
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
      const items = await getTodos();
      items && setItems(items);
  }

  const addItem = async itemValue => {
    const newItem = {
      id: uuid(),
      value: itemValue,
      done: false
    };
    const res = await saveTodo(newItem);
    res && getItems();
  }

  const removeItem = async itemId => {
    const res = await deleteTodo(itemId);
    res && getItems();
  }

  const toggleTodoDone = async itemId => {
    const todoItem = items.find(item => item.id === itemId);
    if (todoItem) {
      const updatedTodoItem = { ...todoItem, done: !todoItem.done };
      const res = await editTodo(updatedTodoItem);
      res && getItems();
    }
  }

  const filterItems = filter => {
    setFilter(filter);
  }

  const filteredItems = items.filter(todo => {
    switch (filter) {
      case VisibilityFilters.SHOW_ACTIVE:
        return !todo.done;
      case VisibilityFilters.SHOW_COMPLETED:
        return todo.done;
      default:
        return true;
    }
  });

  return (
    <div className="App">
      <h1>React ToDo List</h1>
      <AddTodoItem addItem={addItem} />
      <TodoFilter active={filter} filterItems={filterItems} />
      <TodoList
        items={filteredItems}
        removeItem={removeItem}
        toggleTodoDone={toggleTodoDone}
      />
    </div>
  );
}

export default App;
