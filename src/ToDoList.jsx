import React, { useEffect, useState } from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css'

function ToDoList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7046/api/ToDo');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='List'>
          {data.map(item => (
            <ToDoItem id={item.id} description={item.description} />
          ))}
        </div>
      )}
    </>
  );
}

export default ToDoList