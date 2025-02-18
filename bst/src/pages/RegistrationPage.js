import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import './RegistrationPage.css';

function RegistrationPage() {
  return (
    <div className="registration-page">
      <div className="registration-container">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default RegistrationPage;
