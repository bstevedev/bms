import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/location">Location</Link></li> {/* Added link to Location page */}
                <span style={{ 
                    color: 'transparent', 
                    fontSize: '24px', 
                    textShadow: '2px 2px 4px white', 
                    background: 'rgba(76, 175, 80, 0.7)', // Updated background with opacity
                    WebkitBackgroundClip: 'text', 
                    display: 'inline-block', 
                    float: 'left', 
                    margin: '0', 
                    padding: '0' 
                }}>bs_ms</span>

                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
