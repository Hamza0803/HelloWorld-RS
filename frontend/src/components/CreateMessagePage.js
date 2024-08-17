import React, { useState } from 'react';
import CreateMessage from './CreateMessage';

const CreateMessagePage = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <CreateMessage refresh={refresh} setRefresh={setRefresh} />
    </div>
  );
};

export default CreateMessagePage;
