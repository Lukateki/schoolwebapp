import React, { useState } from 'react';
import axios from 'axios';

const QueryButtons = () => {
  const [data, setData] = useState([]);

  const fetchData = async (endpoint) => {
    try {
      const response = await axios.get(`http://localhost:3100/api/${endpoint}`);
      console.log(`Fetched ${endpoint}:`, response.data);
      setData(response.data);
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
    }
  };

  return (
    <div style={{ marginLeft: '50px' }}>
      <h1>Query Results</h1>
      <button onClick={() => fetchData('departments', 'Departments')}>
        List All Departments
      </button>
      <button onClick={() => fetchData('courses', 'Courses')}>
        List All Courses
      </button>
      <button onClick={() => fetchData('students', 'Students')}>
        List All Students
      </button>
  
      <h2>{title}</h2>
      {data.length > 0 ? (
        <table border="1" style={{ width: '100%', marginTop: '20px', textAlign: 'left' }}>
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>{row[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
  
};

export default QueryButtons;

/*
return (
    <div>
      <button onClick={() => fetchData('departments')}>List All Departments</button>
      <button onClick={() => fetchData('courses')}>List All Courses</button>
      <button onClick={() => fetchData('students')}>List All Students</button>
      <div>
        <h3>Results:</h3>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );*/
