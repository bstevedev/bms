import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import LocationPage from './components/LocationPage';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/location" element={<LocationPage />} />
            </Routes>
        </Router>
    );
};

export default App;
