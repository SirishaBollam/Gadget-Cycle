import './ForgotPasswordEmail.css';
import FormInput from './FormInput';
import ButtonUni from './ButtonUni';

function ForgotPasswordEmail({ onNext }) {
    return (
        <div className='forgot-password-email-container'>
            <div className='heading'>
                <h1>Forgot</h1>
                <h4>Password?</h4>
            </div>
            <form className='forgot-password-email-form'>
                <FormInput 
                    placeholder="Email"
                    height="59.2px" 
                    width="461px" 
                    margin_top="42px" 
                />
                <ButtonUni 
                    content="Continue"
                    height="62px" 
                    width="461px" 
                    margin_top="41.1px"
                    onClick={onNext}
                />
            </form>
        </div>
    );
}

export default ForgotPasswordEmail;
