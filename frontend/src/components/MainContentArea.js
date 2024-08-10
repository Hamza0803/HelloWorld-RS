import React from 'react';
import Login from './Login';
import CreateMessage from './CreateMessage';
import ViewMessages from './ViewMessages';

const MainContentArea = () => 
  (
  <main className='mr-4 mt-4 ml-4'>
    <Login />
    <CreateMessage />
    <ViewMessages />
  </main>
);

export default MainContentArea;
