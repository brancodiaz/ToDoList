import React, { useState } from 'react'
import ToDoList from './ToDoList'
import './TaskListContainer.css'

export const TaskListContainer = ({ itemsPending, isLoadingPending, itemsFinished, isLoadingFinished, onDivMove, onAddNewItem}) => {
  

  return (
    <div className='TaskListContainer'>
        <ToDoList isLoading={isLoadingPending} 
                  items={itemsPending} 
                  title="In Process" 
                  newItem={true} 
                  onItemClick={(index) => onDivMove(index, itemsPending, itemsFinished)}
                  onAddNewItem={onAddNewItem} />
        <ToDoList isLoading={isLoadingFinished} 
                  items={itemsFinished} 
                  title="Completed" 
                  itemStyle="marked" 
                  onItemClick={(index) => onDivMove(index, itemsFinished, itemsPending)}/>
    </div>
  )
}