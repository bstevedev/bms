import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

const LoginPage = () => {
    return (
        <div className="container">
            <h2 className="text-center mt-5">Login</h2>
            <form className="mt-4">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
