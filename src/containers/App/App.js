import React, { Component } from 'react';
import uuid from 'uuid/v4';

import { getTodos, saveTodo, editTodo, deleteTodo } from 'services/todoService';
import { VisibilityFilters } from 'utils/constants';

import TodoList from 'components/TodoList';
import AddTodoItem from 'components/AddTodoItem';
import TodoFilter from 'components/TodoFilter';

import './App.scss';

class App extends Component {
  state = {
    items: [],
    filter: VisibilityFilters.SHOW_ALL
  };

  componentDidMount() {
    this.getItems();
  }

  async getItems() {
      const items = await getTodos();
      items && this.setState({ items });
  }

  addItem = async(itemValue) => {
    const newItem = {
      id: uuid(),
      value: itemValue,
      done: false
    };
    const res = await saveTodo(newItem);
    res && this.getItems();
  }

  removeItem = async(itemId) => {
    const res = await deleteTodo(itemId);
    res && this.getItems();
  }

  toggleTodoDone = async(itemId) => {
    const { items } = this.state;
    const todoItem = items.find(item => item.id === itemId);
    if (todoItem) {
      const updatedTodoItem = { ...todoItem, done: !todoItem.done };
      const res = await editTodo(updatedTodoItem);
      res && this.getItems();
    }
  }

  filterItems = filter => {
    this.setState({ filter });
  }

  render() {
    const { items, filter } = this.state;

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
        <AddTodoItem addItem={this.addItem} />
        <TodoFilter active={filter} filterItems={this.filterItems} />
        <TodoList
          items={filteredItems}
          removeItem={this.removeItem}
          toggleTodoDone={this.toggleTodoDone}
        />
      </div>
    );
  }
}

export default App;
