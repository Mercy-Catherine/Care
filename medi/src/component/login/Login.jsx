import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('user'); // Default to 'user'
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await fetch('https://example.com/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, userType }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('userType', userType); // Store user type
                navigate('/order'); // Redirect to the order page
            } else {
                setError(data.message || 'Login failed. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <p className="error-message">{error}</p>}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="userType">Login as</label>
                    <select
                        id="userType"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                        required
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="doctor">Doctor</option>
                        <option value="pharmacy">Pharmacy</option>
                    </select>
                </div>
                <button type="submit" className="login-button">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
