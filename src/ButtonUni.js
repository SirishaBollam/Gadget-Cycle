import './ButtonUni.css';

function ButtonUni({ height, width, content, margin_top, onClick, disabled }) {
    return (
        <button className='button-uni' style={{marginTop: margin_top, height: height, width: width}} onClick={onClick} disabled={disabled}>
            {content}
        </button>
    );
}

export default ButtonUni;
