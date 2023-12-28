import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css'

function ToDoList({ items, isLoading, title, itemStyle, newItem, onItemClick }) {
  const [isInputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const handleDivClick = () => {
    const isVisible = isInputVisible;
    setInputVisible(!isVisible);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    console.log(event.target.value);

    if (event.key === 'Enter' && inputValue.length >= 3) {
      // Perform the POST request here
      // Clear the input and hide it
      setInputValue('');
      setInputVisible(false);
    }
  };

  const handleOnBlur = () => {
    setInputValue('');
    setInputVisible(false);
  };

  return (
    <>
      <div className='list'>
        <h3>{title}</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          items.map((item, index) => (
            <ToDoItem id={item.id} description={item.description} itemStyle={itemStyle} onItemClick={() => onItemClick(index)} />
          ))
        )}
        {newItem && !isInputVisible && (<div className='newItem' onClick={handleDivClick}><strong>+</strong> Add a new task</div>)}
        {isInputVisible && (
          <input
            type="text"
            className='inputNewItem'
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            onBlur={handleOnBlur}
            autoFocus  // Automatically focus on the input when it appears
          />
        )}
      </div>
    </>
  );
}

export default ToDoList