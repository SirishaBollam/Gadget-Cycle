import './TrackingNumberCopy.css';
import ButtonUni from './ButtonUni';

function TrackingNumberCopy({ tracking_number_value, label_content, width }) {
    return (
        <div className='tracking-number-copy-div' style={{width: width}}>
            <label className='label' htmlFor="input-tracking-number-copy">
                {label_content}
            </label>
            <div className='label-copy-div'>
                <input 
                    type='text'
                    value={tracking_number_value}
                    name="input-tracking-number-copy"
                    readOnly
                    className='input-tracking-number-copy'
                />
                <ButtonUni
                    content="Copy"
                    height="53px"
                    width="142px"
                    onClick={() => {navigator.clipboard.writeText(tracking_number_value)}}
                />
            </div>
        </div>
    );
}

export default TrackingNumberCopy;
