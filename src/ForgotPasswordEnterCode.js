import './ForgotPasswordEnterCode.css';
import React, { useState, useEffect } from 'react';
import ButtonUni from './ButtonUni';

function ForgotPasswordEnterCode({ onCodeSubmit }) {
    const [code, setCode] = useState(new Array(6).fill(''));
    const [countdown, setCountdown] = useState(30);

    useEffect(() => {
       if (countdown > 0) {
            const timerId = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timerId);
       } 
    }, [countdown]);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        const newCode = [...code];
        newCode[index] = element.value;
        setCode(newCode);

        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    const handleSubmit = () => {
        onCodeSubmit(code.join(''));
    }

    const handleResendClick = () => {
        setCountdown(30);
    }

    return (
        <div className='forgot-password-enter-code-container'>
            <div className='heading'>
                <h1>Forgot</h1>
                <h4>Password?</h4>
                <p className='para-enter-code'>Enter verfication code</p>
                <p className='para-mail-sent'>The verification code has been sent to mail</p>
            </div>
            <div className='code-container'>
                {code.map((digit, index) => (
                    <input
                        className='code-input-box'
                        key={index}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(e.target, index)}
                        onFocus={(e) => e.target.select()}
                    />
                ))}
            </div>
            <div className='para-resend-div'>
                {countdown != 0 && <p className='para-resend'>Resend after {countdown} seconds</p>}
                {countdown == 0 && <button className='button-resend' onClick={handleResendClick}>Resend Code</button>}
            </div>
            <ButtonUni 
                height="62px"
                width="461px"
                content="Continue"
                margin_top="48px"
                onClick={handleSubmit}
            />
        </div>
    );
}

export default ForgotPasswordEnterCode;
