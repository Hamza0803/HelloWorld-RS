import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewMessages = ({ refresh }) => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 5; // Number of messages per page

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

        // Sort messages by timestamp in descending order (newest first)
        const sortedMessages = response.data.data.sort((a, b) => {
          return new Date(b.attributes.timestamp) - new Date(a.attributes.timestamp);
        });

        setMessages(sortedMessages);
      } catch (err) {
        setError('Failed to fetch messages');
        console.error('Failed to fetch messages', err);
      }
    };
    fetchMessages();
  }, [refresh]);

  // Calculate the current messages to display
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = messages.slice(indexOfFirstMessage, indexOfLastMessage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleString();
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-semibold text-blue-800 mb-6">"Hello World" Messages</h1>
      {error && <p className="text-red-500 text-sm font-medium mb-4">{error}</p>}
      <ul className="space-y-4">
        {currentMessages.map((msg) => (
          <li key={msg.id} className="border-b border-gray-300 pb-4">
            <div className="text-lg text-gray-800">{msg.attributes.message || 'No message'}</div>
            <div className="text-sm text-gray-500 mt-1">{msg.attributes.timestamp ? formatDate(msg.attributes.timestamp) : 'No timestamp'}</div>
          </li>
        ))}
      </ul>
      {/* Pagination */}
      <div className="flex justify-center mt-6">
        {Array.from({ length: Math.ceil(messages.length / messagesPerPage) }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={`mx-1 px-3 py-1 border rounded ${currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-blue-500'}`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ViewMessages;
