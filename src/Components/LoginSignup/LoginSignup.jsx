import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const LoginSignup = () => {
    console.log("LoginSignup is mounting");

    const [action, setAction] = useState("Log In");
    const [username, setUsername] = useState(""); // State for username
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/dashboard');
        } catch (error) {
            alert(error.message);
        }
    };

    const handleSignup = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Update the user profile with the username as the display name
            await updateProfile(userCredential.user, {
                displayName: username
            });
            navigate('/dashboard');
        } catch (error) {
            alert(error.message);
        }
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
            <div className="logo-container">
                <img src="/logo192.png" alt="Website logo" />
            </div>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                
                <div className="input">
                    <input 
                        type="email"
                        placeholder="E-Mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input">
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
                    Lost Password?
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