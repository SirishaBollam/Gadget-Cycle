import './BigFormLabelSelect.css';

function BigFormLabelSelect({ placeholder, label, value, onChange }) {
    return (
        <div className='big-form-label-select-div'>
            <label 
                for="big-form-select" 
                className='big-form-select-label'
            >{label}</label>
            <select 
                name="big-form-select"
                className='big-form-select'
                placeholder={placeholder}
            >
                <option>New</option>
                <option>Used</option>
            </select>
        </div>
    );
}

export default BigFormLabelInput;
