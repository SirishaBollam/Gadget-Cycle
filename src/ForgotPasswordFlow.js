import React, { useState, Fragment } from 'react';
import './ForgotPasswordFlow.css';
import Header from './Header';
import ForgotPasswordEmail from './ForgotPasswordEmail';
import ForgotPasswordEnterCode from './ForgotPasswordEnterCode';
import ForgotPasswordNewPassword from './ForgotPasswordNewPassword';

function ForgotPasswordFlow() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [code, setCode] = useState(0);
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleEmailSubmit = (email) => {
        setEmail(email);
        setStep(2); 
    }

    const handleCodeSubmit = (code) => {
        setCode(code);
        setStep(3);
    }

    const handleNewPasswordSubmit = (password, confirmPassword) => {
       
    }

    return (
        <div className='forgot-password-flow-container'>
            <Header />
            <div className='forgot-password-fragment'>
                {step == 1 && <ForgotPasswordEmail onNext={handleEmailSubmit}/>}
                {step == 2 && <ForgotPasswordEnterCode onCodeSubmit={handleCodeSubmit}/>}
                {step == 3 && <ForgotPasswordNewPassword onFinish={handleNewPasswordSubmit}/>}
            </div>
        </div>
    );
}

export default ForgotPasswordFlow;
