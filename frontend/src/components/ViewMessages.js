import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewMessages = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem('jwt');
      try {
        const response = await axios.get('http://localhost:1337/api/messages', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Fetched Messages:", response.data.data);
        setMessages(response.data.data);
      } catch (err) {
        setError('Failed to fetch messages');
        console.error('Failed to fetch messages', err);
      }
    };
    fetchMessages();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleString();
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl mb-4">"Hello World" Messages</h2>
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
      <ul>
        {messages.map((msg) => (
          <li key={msg.id} className="border-b py-2">
            {msg.attributes.message || 'No message'} - {msg.attributes.timestamp ? formatDate(msg.attributes.timestamp) : 'No timestamp'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewMessages;
