import './LoginPage.css';
import FormInput from './FormInput';
import ButtonUni from './ButtonUni';
import ButtonGoogle from './ButtonGoogle';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header'
import loginUser from './services/loginUser';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        try {
            const user = await loginUser(email, password);
            console.log('Logged in user:', user);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    const navigate = useNavigate();

    return (
        <div className='login-page'>
            <Header />
            <div className='login-page-container'>
                <div className='heading'>
                    <h1>Login</h1>
                    <h4>to get started</h4>
                </div>
                <form className='login-page-form' onSubmit={handleLogin}>
                    <FormInput 
                        placeholder="Email"
                        height="59.2px" 
                        width="461px" 
                        margin_top="42px" 
                        onChange={handleEmailChange}
                    />
                    <FormInput 
                        placeholder="Password"
                        height="59.2px" 
                        width="461px" 
                        margin_top="19.57px" 
                        onChange={handlePasswordChange}
                    />
                    <div className="login-form-aux-links">
                        <Link to="/forgotpassword" className='forgot-password-link'>Forgot Password?</Link>
                        <div>
                            <p>New User?</p><Link to="/signup" className='register-link'> Register</Link>
                        </div>
                    </div>
                    <ButtonUni 
                        content="Login In"
                        height="62px" 
                        width="461px" 
                        margin_top="31.52px"
                    />
                </form>
                <ButtonGoogle 
                    height="60px"
                    width="461px"
                    margin_top="20px"
                />
            </div>
        </div>
    );
}

export default LoginPage;
