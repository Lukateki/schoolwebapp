import React, { useState } from 'react';
import axios from 'axios';

const QueryButtons = () => {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [title, setTitle] = useState('Students');
    const [activeTab, setActiveTab] = useState('students'); // Track active tab
    const [page, setPage] = useState(1); // Track pagination
    const [totalPages, setTotalPages] = useState(1); // Store total pages

    // Function to fetch data from API
    const fetchData = async (endpoint, title, pageNumber = 1) => {
        try {
            console.log(`Fetching data from: ${endpoint}, Page: ${pageNumber}`);
            const response = await axios.get(`http://localhost:3100/api/${endpoint}?page=${pageNumber}`);

            let results = response.data;

            // If fetching students, extract the `students` array and pagination info
            if (endpoint === 'students') {
                results = response.data.students;
                setTotalPages(response.data.totalPages); // Set total pages
            }

            if (results.length > 0) {
                setColumns(Object.keys(results[0]).filter(col => col !== 'createdAt' && col !== 'updatedAt')); // Exclude timestamps
            }

            setData(results);
            setTitle(title);
            setActiveTab(endpoint);
            setPage(pageNumber);
        } catch (error) {
            console.error(`Error fetching ${endpoint}:`, error);
            setData([]);
            setColumns([]);
            setTitle(`Error loading ${title}`);
        }
    };

    return (
        <div style={{ marginLeft: '20px', maxWidth: '700px' }}>
            <h1>Student Info Database</h1>

            {/* Tab Navigation */}
            <div style={{ marginBottom: '20px' }}>
                <button onClick={() => fetchData('students', 'Students', 1)} style={{ fontWeight: activeTab === 'students' ? 'bold' : 'normal' }}>
                    Students
                </button>
                <button onClick={() => fetchData('courses', 'Courses')} style={{ fontWeight: activeTab === 'courses' ? 'bold' : 'normal' }}>
                    Courses
                </button>
                <button onClick={() => fetchData('departments', 'Departments')} style={{ fontWeight: activeTab === 'departments' ? 'bold' : 'normal' }}>
                    Departments
                </button>
            </div>

            <h2>{title}</h2>
            {data.length > 0 ? (
                <>
                    <table border="1" style={{ width: '100%', marginTop: '10px', textAlign: 'left' }}>
                        <thead>
                            <tr>
                                {columns.map((col, index) => (
                                    <th key={index}>{col.replace('_', ' ')}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {columns.map((col, colIndex) => (
                                        <td key={colIndex}>
                                            {/* Handle courses as an array */}
                                            {Array.isArray(row[col]) ? (
                                                row[col].map((course, i) => (
                                                    <a key={i} href={course.url} style={{ display: 'block' }}>
                                                        {course.name}
                                                    </a>
                                                ))
                                            ) : (
                                                row[col] // Render normal text fields
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination Controls (Only for Students) */}
                    {activeTab === 'students' && (
                        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '5px' }}>
                            <button disabled={page === 1} onClick={() => fetchData('students', 'Students', page - 1)}>
                                Previous
                            </button>

                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => fetchData('students', 'Students', index + 1)}
                                    style={{ fontWeight: page === index + 1 ? 'bold' : 'normal' }}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            <button disabled={page === totalPages} onClick={() => fetchData('students', 'Students', page + 1)}>
                                Next
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default QueryButtons;
