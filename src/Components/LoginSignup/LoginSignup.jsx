import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const mockUser = {
    email: 'user@example.com',
    password: 'password123', // In a real app, passwords would be hashed and managed securely
};

const LoginSignup = () => {

    console.log("LoginSignup is mounting");

    const [action, setAction] = useState("Log In");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email === mockUser.email && password === mockUser.password) {
            navigate('/dashboard'); // Navigate to the dashboard route on successful login
        } else {
            alert('Invalid credentials!'); // Replace with a more user-friendly error handling
        }
    };

    const handleSignup = () => {
        // Here you'd handle the signup logic
        alert('Signup logic not implemented.'); // Placeholder for signup logic
    };

    const handleAction = () => {
        if (action === "Log In") {
            handleLogin();
        } else {
            handleSignup();
        }
    };

    return (
        <div className='container'>
            {/* Logo Image */}
            <div className="logo-container">
                <img src="/logo192.png" alt="Website logo" />
            </div>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action !== "Log In" && (
                    <div className="input">
                        <img src={user_icon} alt="" />
                        {/* You would also manage the name state similar to email and password */}
                        <input type="text" placeholder="Name" />
                    </div>
                )}
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input 
                        type="email"
                        placeholder="E-Mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>

            {action !== "Sign Up" && (
                <div className="forgot-password">
                    Lost Password? <span>Click Here</span>
                </div>
            )}

            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={handleAction}>
                    {action}
                </div>
                <div className="submit" onClick={() => setAction(action === "Log In" ? "Sign Up" : "Log In")}>
                    {action === "Log In" ? "Sign Up" : "Log In"}
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;