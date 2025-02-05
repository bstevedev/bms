import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import LocationPage from './components/LocationPage';
import Navigation from './components/Navigation';
import LoginPage from './components/LoginPage'; // Importing the LoginPage

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/location" element={<LocationPage />} />
                <Route path="/login" element={<LoginPage />} /> {/* Adding route for LoginPage */}
            </Routes>
        </Router>
    );
};

export default App;
