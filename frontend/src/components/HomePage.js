import React, { useState } from 'react';
import CreateMessage from './CreateMessage';
import ViewMessages from './ViewMessages';

const HomePage = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <CreateMessage refresh={refresh} setRefresh={setRefresh} />
      <ViewMessages refresh={refresh} />
    </div>
  );
};

export default HomePage;
