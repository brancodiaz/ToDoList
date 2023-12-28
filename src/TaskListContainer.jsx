import React from 'react'
import ToDoList from './ToDoList'
import './TaskListContainer.css'

export const TaskListContainer = ({ items, isLoading }) => {
  return (
    <div className='TaskListContainer'>
        <ToDoList isLoading={isLoading} items={items} title="In Process"/>
        <ToDoList isLoading={isLoading} items={items} title="Completed"/>
    </div>
  )
}
