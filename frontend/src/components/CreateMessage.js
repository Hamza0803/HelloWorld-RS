import React, { useState } from 'react';
import axios from 'axios';

const CreateMessage = ({ refresh, setRefresh }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the message is empty
    if (!message.trim()) {
      setError('Please enter a message.');
      return;
    }

    const token = localStorage.getItem('jwt');
    if (!token) {
      setError('You must be logged in to submit a message.');
      return;
    }

    const payload = {
      data: {
        message: message,
        timestamp: new Date().toISOString(),
      },
    };

    try {
      const response = await axios.post(
        'http://localhost:1337/api/messages',
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log("Response from Strapi:", response.data);
      setMessage('');
      setError(''); // Clear any previous errors
      setRefresh(!refresh); // Trigger refresh in ViewMessages component
    } catch (err) {
      setError('Failed to create message.');
      console.error('Error creating message:', err.response ? err.response.data : err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl mb-4">Create New "Hello World" Message</h2>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
        <input
          type="text"
          id="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (error) setError(''); // Clear the error if the user starts typing
          }}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </form>
  );
};

export default CreateMessage;
