import React, { useEffect, useState } from 'react';

const LocationPage = () => {
    const [location, setLocation] = useState('');

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
            }, (error) => {
                setLocation('Unable to retrieve location. Please check your browser settings.');
            });
        } else {
            setLocation('Geolocation is not supported by this browser.');
        }
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Your Location:</h2>
            <p>{location}</p>
        </div>
    );
};

export default LocationPage;
