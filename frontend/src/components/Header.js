import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/login');
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center">
        <img src="/app.png" alt="App Icon" className="w-8 h-8 mr-3" />
        <h1 className="text-2xl font-bold">HelloWorld-RS</h1>
      </div>
      <nav className="flex items-center">
        <Link 
          to="/create-message" 
          className="mr-4 transition duration-300 ease-in-out transform hover:text-yellow-300 hover:scale-105"
        >
          Create Message
        </Link>
        <Link 
          to="/view-messages" 
          className="mr-4 transition duration-300 ease-in-out transform hover:text-yellow-300 hover:scale-105"
        >
          View Messages
        </Link>
        <button 
          onClick={handleLogout} 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Header;
