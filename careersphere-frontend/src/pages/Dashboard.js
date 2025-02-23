import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token"); // ✅ Get token from localStorage
                if (!token) throw new Error("No token found");

                const response = await axios.get("http://localhost:5000/api/auth/me", {
                    headers: {
                        Authorization: `Bearer ${token}`, // ✅ Attach token in headers
                    },
                });

                setUser(response.data);
            } catch (err) {
                console.error("Error fetching user:", err);
                setError(err.response?.data?.msg || "Unauthorized access");
            }
        };

        fetchUser();
    }, []);

    if (error) return <h2>{error}</h2>;
    if (!user) return <h2>Loading...</h2>;

    return (
        <div>
            <h1>Welcome, {user.name}!</h1>
            <p>Email: {user.email}</p>
            <button onClick={() => navigate('/create-resume')}>Create a New Resume</button>
            <button onClick={() => navigate('/upload-resume')}>Upload Resume (PDF)</button>
            <button onClick={() => navigate('/view-resumes')}>View Uploaded Resumes</button>

        </div>
    );
};

export default Dashboard;
