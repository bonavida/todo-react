import React, { Component } from 'react';
import { keyCodes } from 'utils/constants';

import './AddTodoItem.scss';

class AddTodoItem extends Component {
  state = {
    itemValue: ''
  };
  inputRef = React.createRef();

  componentDidMount() {
    this.inputRef && this.inputRef.current && this.inputRef.current.focus();
  }

  changeHandler = event => {
    this.setState({ itemValue: event.currentTarget.value });
  }

  keyDownHandler = event => {
    if (event.keyCode === keyCodes.ENTER) {
      this.addNewItem();
    }
  }

  addNewItem = () => {
    const { itemValue } = this.state;
    this.props.addItem(itemValue);
    this.setState({ itemValue: '' });
  }

  render () {
    const { itemValue } = this.state;

    return (
      <div className="add-todo-item__container">
        <input
          ref={this.inputRef}
          type="text"
          className="form-control add-todo-item__input"
          placeholder="Add a new ToDo item"
          value={itemValue}
          onChange={this.changeHandler}
          onKeyDown={this.keyDownHandler}
        />
        <button
          className="btn btn-primary add-todo-item__button"
          disabled={!itemValue}
          onClick={this.addNewItem}
        >
          Add
        </button> 
      </div>
    );   
  }
}

export default AddTodoItem;
