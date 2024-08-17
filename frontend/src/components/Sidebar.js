import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-10 bg-orange-500 text-white flex flex-col items-center py-6">
      <nav className="flex-grow">
        <ul className="space-y-6">
          <li className="hover:bg-blue-600 p-2 rounded">
            <Link to="/create-message">
              <img src="/create96.png" alt="Create Message" className="w-5 h-5" />
            </Link>
          </li>
          <li className="hover:bg-blue-600 p-2 rounded">
            <Link to="/view-messages">
              <img src="/view96.png" alt="View Messages" className="w- h-5" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
