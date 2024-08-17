import React, { useState } from 'react';
import ViewMessages from './ViewMessages';

const ViewMessagesPage = () => {
  const [refresh] = useState(false);  // You may not need the refresh in this component if you're only viewing messages

  return (
    <div>
      <ViewMessages refresh={refresh} />
    </div>
  );
};

export default ViewMessagesPage;
