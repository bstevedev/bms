import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import LocationPage from './components/LocationPage'; // Importing the new LocationPage component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} /> 
            <Route path="/location" element={<LocationPage />} /> 
            <Route path="*" element={<NotFound />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
