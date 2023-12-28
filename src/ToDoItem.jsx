import React from 'react'
import './ToDoItem.css'
function ToDoItem({ id, description, itemStyle, onItemClick }) {

  // const handleOnClick = async (id) => {
  //   fetch(`https://localhost:7046/api/ToDo/${id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       // Handle the response data as needed
  //       console.log('Response:', data);
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // };

  return (
    <>
      <div id={id} 
          className={`item ${itemStyle}`} 
          onClick={onItemClick}
      >
        {description}
      </div>
    </>
  )
}

export default ToDoItem