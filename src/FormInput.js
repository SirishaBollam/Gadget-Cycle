import './FormInput.css';

function FormInput({ height, width, placeholder, margin_top, onChange }) {
    return (
        <input className='form-input' placeholder={placeholder} type='text' style={{height: height, width: width, marginTop: margin_top}} onChange={onChange}/>
    );
}

export default FormInput;
