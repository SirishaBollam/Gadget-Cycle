import './HeaderRightFinal.css';
import { BrowserRouter as Router, Switch, Route, Link, Routes, useNavigate } from 'react-router-dom';
import { isAuthenticated } from './services/authService';
import { useState } from 'react';
import { useAuth } from './services/useAuth';
import { auth } from './firbase/config';

function HeaderRightFinal() {
    const navigate = useNavigate();
    const { currentUser } = useAuth();

    const handleDonateButton = async () => {
        if (currentUser) {
            navigate('/donate');
        } else {
            navigate('/login');
        }
    };

    const handleAuth = () => {
        if (currentUser) {
            auth.signOut();
        } else {
            navigate('/login');
        }
    };

    return (
        <div className='con-header-right-final'>
            <button id="btn_donate" onClick={handleDonateButton}>Donate</button>
            <button id="btn_login" onClick={handleAuth}>{currentUser ? 'Logout' : 'Login'}</button>
        </div>
    );
}

export default HeaderRightFinal;
