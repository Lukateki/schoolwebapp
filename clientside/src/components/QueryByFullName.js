import React, { useState } from 'react';
import axios from 'axios';

const QueryByFullName = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [results, setResults] = useState([]);

  const queryStudents = async () => {
    try {
      const response = await axios.get(`https://schoolwebapp.onrender.com/api/students_query_first_last`, {
        params: { firstName, lastName },
      });
      setResults(response.data);
    } catch (error) {
      console.error('Error querying students by full name:', error);
    }
  };

  return (
    <div>
      <h2>Query By Full Name</h2>
      <input
        type="text"
        placeholder="Enter first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={queryStudents}>Query by Full Name</button>
      <div>
        <h3>Results:</h3>
        <pre>{JSON.stringify(results, null, 2)}</pre>
      </div>
    </div>
  );
};

export default QueryByFullName;
