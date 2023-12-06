import './AddSubButton.css';

function AddSubButton({ content, onClick, disabled }) {
    return (
        <button className='add-sub-button' onClick={onClick} disabled={disabled}>
            <div>
                <p>{content}</p>
            </div>
        </button>
    );
}

export default AddSubButton;
