import React from 'react'
import RegisterItem from './registerItem'
import ToDoList from './ToDoList'
import './Principal.css'
import './functions/getToDoItems'
import { useEffectToDoItems } from './functions/useEffectToDoItems'
import { TaskListContainer } from './TaskListContainer'

export const Principal = () => {
  const { items, isLoading } = useEffectToDoItems();

  return (
    <div className='ToDoList'>
      <h1>To-Do List</h1>
      <RegisterItem />
      {/* <ToDoList isLoading={isLoading} items={items} /> */}
      <TaskListContainer isLoading={isLoading} items={items} />
    </div>
  )
}