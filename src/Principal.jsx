import React, { useState, useEffect } from 'react'
import './Principal.css'
import './functions/getToDoItems'
import { useEffectToDoItems } from './functions/useEffectToDoItems'
import { TaskListContainer } from './TaskListContainer'

export const Principal = () => {
  const { isLoading: isLoadingPending, items: itemsPending } = useEffectToDoItems(true);
  const { isLoading: isLoadingFinished, items: itemsFinished } = useEffectToDoItems(false);

  const [statePending, setStatePending] = useState([]);
  const [stateFinished, setStateFinished] = useState([]);
  const [newItemId, setNewItemId] = useState(0);

  useEffect(() => {
    if (!isLoadingPending) {
      setStatePending(itemsPending);
    }
  }, [isLoadingPending]);

  useEffect(() => {
    if (!isLoadingFinished) {
      setStateFinished(itemsFinished);
    }
  }, [isLoadingFinished]);

  useEffect(() => {
    setNewItemId(newItemId);
  }, [newItemId]);

  const handleAddNewItem = (newTaskDescription) => {
    fetch('https://localhost:7046/api/ToDo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description: newTaskDescription }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data as needed
         console.log('Response:', data);
        const newItem = {id: data, description: newTaskDescription};
        setStatePending((prevList) => [...prevList, newItem]);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleDivMove = (index, sourceList, destinationList) => {
    const movedItem = sourceList[index];
    // Update the state with the new lists
    if (sourceList === statePending) {
      setStatePending((prevList) => prevList.filter((_, i) => i !== index));
      setStateFinished((prevList) => [...prevList, movedItem]);
    } else {
      setStatePending((prevList) => [...prevList, movedItem]);
      setStateFinished((prevList) => prevList.filter((_, i) => i !== index));
    }

    fetch(`https://localhost:7046/api/ToDo/${movedItem.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data as needed
        console.log('Response:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='ToDoList'>
      <h1>To-Do List</h1>
      <TaskListContainer isLoadingPending={isLoadingPending}
        itemsPending={statePending}
        isLoadingFinished={isLoadingFinished}
        itemsFinished={stateFinished}
        onDivMove={handleDivMove}
        onAddNewItem={handleAddNewItem} />
    </div>
  )
}