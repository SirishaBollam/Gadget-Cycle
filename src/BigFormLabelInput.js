import './BigFormLabelInput.css';

function BigFormLabelInput({ placeholder, label, value, onChnage, width }) {
    return (
        <div className='big-form-label-input-div' style={{width: width}}>
            <label 
                for="big-form-input" 
                className='big-form-input-label'
            >{label}</label>
            <input 
                type="text"
                value={value}
                onChange={onChnage}
                name="big-form-input"
                className='big-form-input'
                placeholder={placeholder}
                style={{width: width}}
            />
        </div>
    );
}

export default BigFormLabelInput;

// width: 594.265px;