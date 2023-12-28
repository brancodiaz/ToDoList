import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css'

function ToDoList({ items, isLoading, title }) {
  return (
    <>
      <div className='list'>
        <h3>{title}</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          items.map(item => (
            <ToDoItem id={item.id} description={item.description} />
          ))
        )}
      </div>
    </>
  );
}

export default ToDoList