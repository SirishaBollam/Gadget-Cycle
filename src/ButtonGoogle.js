import './ButtonGoogle.css';
import google from './images/google.svg';

function ButtonGoogle({ height, width, margin_top }) {
    return (
        <button className='button-google' style={{height: height, width: width, marginTop: margin_top}}>
            <img src={google} alt='google-image'/>
            <p>Google</p>
        </button>
    );
}

export default ButtonGoogle;
