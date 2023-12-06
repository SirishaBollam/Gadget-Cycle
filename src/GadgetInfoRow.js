import './GadgetInfoRow.css';

function GadgetInfoRow({ key_left, value }) {
    return (
        <div className='gadget-info-row-div'>
            <div className='gadget-info-row-key-div'>
                <p>• {key_left}</p>
            </div>
            <div className='gadget-info-row-value-div'>
                <p>{value}</p>
            </div>
        </div>
    );
}

export default GadgetInfoRow;
