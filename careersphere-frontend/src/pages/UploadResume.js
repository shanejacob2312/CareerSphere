import React, { useState } from 'react';
import axios from 'axios';

const UploadResume = () => {
    const [file, setFile] = useState(null);
    const [resumeUrl, setResumeUrl] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return alert("Please select a file");

        const formData = new FormData();
        formData.append('resume', file);

        try {
            const response = await axios.post('http://localhost:5000/api/resume/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            setResumeUrl(`http://localhost:5000${response.data.filePath}`);
        } catch (error) {
            console.error('Upload failed:', error);
        }
    };

    return (
        <div>
            <h2>Upload Your Resume (PDF)</h2>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>

            {resumeUrl && (
                <div>
                    <h3>View Uploaded Resume:</h3>
                    <a href={resumeUrl} target="_blank" rel="noopener noreferrer">Open Resume</a>
                </div>
            )}
        </div>
    );
};

export default UploadResume;
