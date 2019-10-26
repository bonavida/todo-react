import React, { Component } from 'react';

import TodoList from 'components/TodoList';

import './App.scss';

const initialItems = [
  { id: 1, value: "Learn React", done: false },
  { id: 2, value: "Go shopping", done: true },
  { id: 3, value: "Buy flowers", done: true },
];

class App extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.setState({ items: initialItems });
  }

  removeItem = (itemId) => {
    const { items } = this.state;
    const todoItems = items.filter(item => item.id !== itemId);

    this.setState({ items: todoItems });
  }

  toggleTodoDone = (itemId) => {
    const { items } = this.state;
    const todoItems = [ ...items ];
    const todoItem = todoItems.find(item => item.id === itemId);
    if (todoItem) {
      todoItem.done = !todoItem.done;
      this.setState({ items: todoItems });
    }
  }

  render() {
    const { items } = this.state;

    return (
      <div className="App">
        <h1>React ToDo List</h1>
        <TodoList
          items={items}
          removeItem={this.removeItem}
          toggleTodoDone={this.toggleTodoDone}
        />
      </div>
    );
  }
}

export default App;
