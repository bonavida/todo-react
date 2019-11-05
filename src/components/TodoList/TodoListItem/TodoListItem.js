import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { useToast } from '../../../hooks/toasts';

import './TodoListItem.scss';

const TodoListItem = ({ item, removeItem, toggleTodoDone }) => {

  const todoClassName = item.done ? 'todo-item--done' : '';

  useToast(item.id, 'Well done!', [item.done]);

  return (
    <li className="list-group-item todo-item">
      <div className={`${todoClassName}`}>
        <FontAwesomeIcon
          className="todo-item__icon"
          icon={faCheck}
          onClick={() => toggleTodoDone(item.id)}
        />
        { item.value }
        <button
          type="button"
          className="todo-item__button--close close"
          onClick={() => removeItem(item.id)}
        >
          &times;
        </button>
      </div>
    </li>     
  );
}

export default TodoListItem;
