import React, { Component } from 'react';

import TodoListItem from './TodoListItem';

import './TodoList.scss';

const initialItems = [
  { id: 1, value: "Learn React", done: false },
  { id: 2, value: "Go shopping", done: true },
  { id: 3, value: "Buy flowers", done: true },
];

class TodoList extends Component {
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

  renderItems() {
    const { items } = this.state;

    return items.map((item, index) => (
      <TodoListItem
        key={`todo-list-item-${index}`}
        item={item}
        removeItem={this.removeItem}
        toggleTodoDone={this.toggleTodoDone}
      />
    ));
  }

  render () {
    return (
      <ul className="todolist__container list-group">
        { this.renderItems() }
      </ul>
    );
  }
}

export default TodoList;
