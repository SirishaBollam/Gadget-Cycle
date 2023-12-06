import TwoInputForm from "./TwoInputForm";

function ForgotPasswordNewPassword({onFinish}) {
    return (
        <TwoInputForm heading="Forgot" subheading="Password?" placeholder1="New Password" placeholder2="Confirm Password" buttonContent="Continue" onFormSubmit={onFinish}/>
    );
}

export default ForgotPasswordNewPassword;
