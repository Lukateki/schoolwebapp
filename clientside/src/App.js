import React from 'react';
import QueryButtons from './components/QueryButtons.js';
import QueryByName from './components/QueryByName.js';
import QueryByFullName from './components/QueryByFullName.js';

function App() {
  return (
    <div className="App" style={{ marginLeft: '20px' }}>
      <h1>Student Info Database</h1>
      <QueryButtons />
      <QueryByName />
      <QueryByFullName />
    </div>
  );
}

export default App;
