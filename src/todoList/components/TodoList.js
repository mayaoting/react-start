import React from 'react';
import TodoItem from './TodoItem'
const TodoList = ({filteredTodos,actions}) => {
  return (
    <ul className="todo-list">
      {
        filteredTodos.map(todo => 
          <TodoItem key={todo.id} todo={todo} {...actions} />
        )
      }
    </ul>
  )
}

export default TodoList;
