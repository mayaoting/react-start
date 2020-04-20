import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'


const MainSection = ({todosCount, completedCount, actions}) => (
  <section className="main">
    {
      !!todosCount && 
      <span>
        <input type="checkbox"
          className="toggle-all"
          checked={completedCount === todosCount}
          readOnly
        />
      </span> 
    }
    <VisibleTodoList/>
    {
      !!todosCount &&
      <Footer
        completedCount={completedCount}
        activeCount={todosCount - completedCount}
        onClearCompleted={actions.clearCompleted}
      />
    }
  </section>
)

export default MainSection