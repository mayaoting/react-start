import React, { Component } from 'react';
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput';


class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { editing:false }
  }
  handleDoubleClick = e => {
    this.setState({
      editing:true
    })
  }
  handleSave(id,text) {
    if(text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id,text)
    }
    this.setState({editing:false})
  }
  render() { 
    let element;
    const {todo, completeTodo, deleteTodo} = this.props;

    if(this.state.editing) {
      element = (
        <TodoTextInput 
          text={todo.text}
          editing={this.state.editing}
          onChange={(text) => this.handleSave(todo.id,text)}
        />
      )
    } else {
      element = (
        <div className="view">
          <input type="checkbox" 
            className="toggle"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
          />
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy"
            onClick={() => deleteTodo(todo.id)}
          >
          </button>
        </div>
      )
    }


    return (  
      <li className={classnames({
        completed:todo.completed,
        editing:this.state.editing
      })}>
        {element}
      </li>
    );
  }


}

export default TodoItem;