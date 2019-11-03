import React, { useState, useEffect } from 'react';
import { keyCodes } from 'utils/constants';

import './AddTodoItem.scss';

const AddTodoItem = props => {
  const [itemValue, setItemValue] = useState('');
  const inputRef = React.createRef();

  useEffect(() => {
    inputRef && inputRef.current && inputRef.current.focus();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeHandler = event => {
    setItemValue(event.currentTarget.value);
  }

  const keyDownHandler = event => {
    if (event.keyCode === keyCodes.ENTER) {
      addNewItem();
    }
  }

  const addNewItem = () => {
    props.addItem(itemValue);
    setItemValue('');
  }

  return (
    <div className="add-todo-item__container">
      <input
        ref={inputRef}
        type="text"
        className="form-control add-todo-item__input"
        placeholder="Add a new ToDo item"
        value={itemValue}
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
      />
      <button
        className="btn btn-primary add-todo-item__button"
        disabled={!itemValue}
        onClick={addNewItem}
      >
        Add
      </button> 
    </div>
  );   
}

export default AddTodoItem;
