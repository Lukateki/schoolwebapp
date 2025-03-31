import React, { useState } from 'react';
import axios from 'axios';

const QueryByName = () => {
  const [firstName, setFirstName] = useState('');
  const [results, setResults] = useState([]);

  const queryStudents = async () => {
    try {
      const response = await axios.get(`https://schoolwebapp.onrender.com/api/students_query_firstName`, {
        params: { firstName },
      });
      setResults(response.data);
    } catch (error) {
      console.error('Error querying students by first name:', error);
    }
  };

  return (
    <div>
        <h2>Query By First Name</h2>
      <input
        type="text"
        placeholder="Enter first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <button onClick={queryStudents}>Query by First Name</button>
      <div>
        <h3>Results:</h3>
        <pre>{JSON.stringify(results, null, 2)}</pre>
      </div>
    </div>
  );
};

export default QueryByName;
