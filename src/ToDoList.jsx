import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css'

function ToDoList({ items, isLoading, title, itemStyle, newItem, onItemClick, onAddNewItem }) {
  const [isInputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const handleDivClick = () => {
    const isVisible = isInputVisible;
    setInputVisible(!isVisible);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && inputValue.length >= 3) {
      onAddNewItem(inputValue);
      setInputValue(''); // Clear the input after adding the item
    }
  };

  const handleOnBlur = () => {
    setInputValue('');
    setInputVisible(false);
  };

  return (
    <>
      <div className='listcontainer'>
        <h3>{title}</h3>
        <div className='list'>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            items.map((item, index) => (
              <ToDoItem id={item.id} description={item.description} itemStyle={itemStyle} onItemClick={() => onItemClick(index)} />
            ))
          )}
        </div>
          {newItem && !isInputVisible && (<div className='newItem' onClick={handleDivClick}><strong>+</strong> Add a new task</div>)}
          {isInputVisible && (
            <input
              type="text"
              className='inputNewItem'
              value={inputValue}
              onChange={(e) => handleInputChange(e)}
              onKeyDown={handleKeyPress}
              onBlur={handleOnBlur}
              autoFocus
            />
          )}
      </div>
    </>
  );
}

export default ToDoList