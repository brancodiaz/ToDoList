import React, { useState } from 'react'
import './ToDoItem.css'
function ToDoItem({id, description}) {
  const [isChecked, setIsChecked] = useState(false);
  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checkbox value
  };

    return (
      <>
        <p className='item'>
          <input type="checkbox" id={id} checked={isChecked} onChange={handleCheckboxChange} />
          {description}
        </p>
      </>
    )
  }
  
  export default ToDoItem