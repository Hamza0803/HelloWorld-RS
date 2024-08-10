import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';  
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import HomePage from './components/HomePage';

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

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {isAuthenticated && <Header />}
        <div className="flex">
          <div className="flex-1">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
              <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
            </Routes>
          </div>
        </div>
        {isAuthenticated && <Footer />}
      </div>
    </Router>
  );
};

export default App;
