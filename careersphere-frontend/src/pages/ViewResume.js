import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewResume = () => {
    const [resumes, setResumes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/resume/list')
            .then(response => setResumes(response.data))
            .catch(error => console.error("Error fetching resumes:", error));
    }, []);

    return (
        <div>
            <h2>Uploaded Resumes</h2>
            {resumes.length > 0 ? (
                resumes.map((resume, index) => (
                    <div key={index}>
                        <a href={`http://localhost:5000/uploads/${resume.filename}`} target="_blank" rel="noopener noreferrer">
                            View Resume {index + 1}
                        </a>
                    </div>
                ))
            ) : (
                <p>No resumes uploaded yet.</p>
            )}
        </div>
    );
};

export default ViewResume;
