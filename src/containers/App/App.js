import React, { Component } from 'react';
import { VisibilityFilters } from 'utils/constants';

import TodoList from 'components/TodoList';
import AddTodoItem from 'components/AddTodoItem/AddTodoItem';
import TodoFilter from 'components/TodoFilter/TodoFilter';

import './App.scss';

const initialItems = [
  { id: 1, value: "Learn React", done: false },
  { id: 2, value: "Go shopping", done: true },
  { id: 3, value: "Buy flowers", done: true },
];

class App extends Component {
  state = {
    items: [],
    filter: VisibilityFilters.SHOW_ALL
  };

  componentDidMount() {
    this.setState({ items: initialItems });
  }

  addItem = itemValue => {
    const { items } = this.state;
    const newItem = {
      id: items.length + 1,
      value: itemValue,
      done: false
    };
    const todoItems = [ ...items, newItem ];
    this.setState({ items: todoItems });
  }

  removeItem = itemId => {
    const { items } = this.state;
    const todoItems = items.filter(item => item.id !== itemId);

    this.setState({ items: todoItems });
  }

  toggleTodoDone = itemId => {
    const { items } = this.state;
    const todoItems = [ ...items ];
    const todoItem = todoItems.find(item => item.id === itemId);
    if (todoItem) {
      todoItem.done = !todoItem.done;
      this.setState({ items: todoItems });
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
