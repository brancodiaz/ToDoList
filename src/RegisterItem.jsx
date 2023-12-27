import React, { useState } from 'react'
import './RegisterItem.css'
export const RegisterItem = () => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // Prevent the default behavior of the Enter key (e.g., form submission)
            event.preventDefault();

            // Call your POST method here
            // For example, you can use the fetch API
            // Replace the URL and options with your actual API endpoint and data
            fetch('https://localhost:7046/api/ToDo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ description: inputValue }),
            })
                .then(response => response.json())
                .then(data => {
                    // Handle the response data as needed
                    console.log('Response:', data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className='RegisterItem'>
            <input type='text' className='styled-input'
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Add a new task" />
        </div>
    )
}
export default RegisterItem