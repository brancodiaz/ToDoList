import React from 'react'
import './ToDoItem.css'
function ToDoItem({ id, description, itemStyle = '', onItemClick }) {
  return (
    <>
      <div id={id} 
          className={`item ${itemStyle}`} 
          onClick={onItemClick}
      >
        {description}
      </div>
    </>
  )
}

export default ToDoItem