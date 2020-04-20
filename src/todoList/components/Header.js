import React from 'react';
import TodoTextInput from './TodoTextInput';
const Header = ({addTodo}) => {
  return(
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput
        placeholder="what needs to be done"
        newTodo
        onSave={(text) => {
          if(text.length !== 0) {
            addTodo(text)
          }
        }}
      />
    </header>
  )
}

export default Header;