import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';  
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Sidebar from './components/Sidebar'; 
import CreateMessagePage from './components/CreateMessagePage';
import ViewMessagesPage from './components/ViewMessagesPage';

const App = () => {
  
  const checkTokenExpiry = () => {
    const token = localStorage.getItem('jwt');
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Current time in seconds
      const timeRemaining = decodedToken.exp - currentTime; // Time remaining in seconds

      if (timeRemaining > 0) {
        console.log(`Time remaining before token expiry: ${Math.floor(timeRemaining)} seconds`);
        return true;
      } else {
        localStorage.removeItem('jwt');
        return false;
      }
    }
    return false;
  };

  const isAuthenticated = checkTokenExpiry();
  console.log('isAuthenticated:', isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.removeItem('jwt');
    }
  }, [isAuthenticated]);

  const RenderedApp = () => {
    const location = useLocation(); // This hook is now safely inside the Router context
    const shouldShowSidebar = isAuthenticated && location.pathname !== '/login';

    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {isAuthenticated && <Header />}
        <div className="flex flex-1">
          {shouldShowSidebar && <Sidebar />}
          <div className="flex-1 p-6"> {/* Main content will be placed to the right of the sidebar */}
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/create-message" element={isAuthenticated ? <CreateMessagePage /> : <Navigate to="/login" />} />
              <Route path="/view-messages" element={isAuthenticated ? <ViewMessagesPage /> : <Navigate to="/login" />} />
              <Route path="/" element={<Navigate to={isAuthenticated ? "/create-message" : "/login"} />} />
            </Routes>
          </div>
        </div>
        {isAuthenticated && <Footer />}
      </div>
    );
  };

  return (
    <Router>
      <RenderedApp />
    </Router>
  );
};

export default App;
