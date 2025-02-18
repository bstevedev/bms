import React from 'react';
import LoginForm from '../components/LoginForm';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
