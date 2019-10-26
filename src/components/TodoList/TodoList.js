import React from 'react';

import TodoListItem from './TodoListItem';

import './TodoList.scss';

const TodoList = ({items, removeItem, toggleTodoDone}) => {

  const renderItems = items.map((item, index) => (
    <TodoListItem
      key={`todo-list-item-${index}`}
      item={item}
      removeItem={removeItem}
      toggleTodoDone={toggleTodoDone}
    />
  ));

  return (
    <ul className="todolist__container list-group">
      { renderItems }
    </ul>
  );
};

export default TodoList;
