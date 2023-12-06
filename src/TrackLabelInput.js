import './TrackLabelInput.css';

function TrackLabelInput({ label, value, onChange }) {
    return (
        <div className='track-label-input-div'>
            <label 
                htmlFor="track-input" 
                className='track-input-label'
            >{label}</label>
            <input 
                type="text"
                value={value}
                onChange={onChange}
                name="track-input"
                className='track-input'
            />
        </div>
    );
}

export default TrackLabelInput;
