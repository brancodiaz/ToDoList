import React from 'react'
import RegisterItem from './registerItem'
import ToDoList from './ToDoList'
import './Principal.css'
export const Principal = () => {

  return (
    <div className='ToDoList'>
      <h1>To Do List</h1>
      <RegisterItem />
      <ToDoList />
    </div>
  )
}
