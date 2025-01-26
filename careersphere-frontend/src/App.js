import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"; // Import Dashboard component
import UploadResume from './pages/UploadResume';
import ViewResume from './pages/ViewResume';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/upload-resume" element={<UploadResume />} />
                <Route path="/view-resumes" element={<ViewResume />} />
            </Routes>
        </Router>
    );
}

export default App;
