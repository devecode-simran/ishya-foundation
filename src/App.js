import React from 'react';
import HomePage from './Pages/HomePage'; // Correct path
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Donate from './Pages/Donate';
import ProjectsPage from './Pages/ProjectsPage';
import ProjectDetail from './Pages/ProjectDetail';
import Blogs from './Pages/Blogs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/ourprograms" element={<ProjectsPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/media-&-coverage/blog" element={<Blogs />} />
      </Routes>
    </Router>
  );
};

export default App;



