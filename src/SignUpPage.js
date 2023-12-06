import './SignUpPage.css';
import Header from './Header';
import FormInput from './FormInput';
import ButtonUni from './ButtonUni';
import ButtonGoogle from './ButtonGoogle';
import { useState } from 'react';
import registerUser from './services/registerUser';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptedTandC, setAcceptedTandC] = useState(false);
    const [disabledSignUpButton, setDisabledSugnUpButton] = useState(false);

    const navigate = useNavigate();

    const handleFirstNameChange = (e) => {
        setDisabledSugnUpButton(false);
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setDisabledSugnUpButton(false);
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setDisabledSugnUpButton(false);
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setDisabledSugnUpButton(false);
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setDisabledSugnUpButton(false);
        setConfirmPassword(e.target.value);
    };

    const handleAcceptedTandCChange = (e) => {
        setDisabledSugnUpButton(false);
        setAcceptedTandC(e.target.checked);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setDisabledSugnUpButton(true);
        if (password === confirmPassword && acceptedTandC) {
            try {
                const user = await registerUser(email, password);
                navigate("/login");
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div className='signup-page'>
            <Header />
            <div className='signup-page-container'>
                <div className='heading'>
                    <h1>Signup</h1>
                    <h4>to get started</h4>
                </div>
                {/*Add onSubmit and add required alsp*/}
                <form className='sign-page-form' onSubmit={handleSignUp}>
                    <FormInput 
                        placeholder="Firstname"
                        height="59.2px" 
                        width="454.786px" 
                        margin_top="30.42px" 
                        onChange={handleFirstNameChange}
                    />
                    <FormInput 
                        placeholder="Lastname"
                        height="59.2px" 
                        width="454.786px" 
                        margin_top="22.41px" 
                        onChange={handleLastNameChange}
                    />
                    <FormInput 
                        placeholder="Email"
                        height="59.2px" 
                        width="454.786px" 
                        margin_top="21.94px" 
                        onChange={handleEmailChange}
                    />
                    <FormInput 
                        placeholder="Password"
                        height="59.2px" 
                        width="454.786px" 
                        margin_top="21.94px" 
                        onChange={handlePasswordChange}
                    />
                    <FormInput 
                        placeholder="Confirm Password"
                        height="59.2px" 
                        width="454.786px" 
                        margin_top="21.94px" 
                        onChange={handleConfirmPasswordChange}
                    />
                    <div className='terms-and-conditions-check-div'>
                        <label className='terms-and-conditions-check'>
                            <input
                                type="checkbox"
                                checked={acceptedTandC}
                                onChange={handleAcceptedTandCChange}
                            />
                            <div><p>Agree to Our terms and Conditions</p></div>
                        </label>
                    </div>
                    <ButtonUni 
                        content="Sign Up"
                        height="62px" 
                        width="454.786px" 
                        margin_top="54px"
                        disabled={disabledSignUpButton}
                    />
                </form>
                <ButtonGoogle 
                    height="60px"
                    width="454.786px"
                    margin_top="19.94px"
                />
                <div className='signup-form-aux-link'>
                    <p>Already registered?</p><a className='register-link'> Login</a>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
