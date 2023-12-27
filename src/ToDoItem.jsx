import React, { useState } from 'react'

function ToDoItem({id, description}) {
  const [isChecked, setIsChecked] = useState(false);
  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checkbox value
  };

    return (
      <>
        <label>
          <input type="checkbox" id={id} checked={isChecked} onChange={handleCheckboxChange} />
          {description}
        </label>
        <br/>
      </>
    )
  }
  
  export default ToDoItem