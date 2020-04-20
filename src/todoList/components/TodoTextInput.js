import React, { Component }from 'react';
import classnames from 'classnames'

class TodoTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text:this.props.text || ''}
  }
  handleBlur = e => {
    if(!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }
  handleChange = e => {
    this.setState({
      text:e.target.value
    })
  }
  handleSubmit = e => {
    const text = e.target.value;
    if(e.which === 13) {
      this.props.onSave(text);
      if(this.props.newTodo) {
        this.setState({text:''})
      }
    }
  }
  render() { 
    return (  
      <input type="text"
        className={classnames(
          {edit:this.props.editing,'new-todo':this.props.newTodo})}
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}
 
export default TodoTextInput;