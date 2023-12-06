import './SelectIndiOrCorp.css';
import ButtonUni from './ButtonUni';
import indi_img from './images/indi_image.png';
import corp_img from './images/corp_image.png';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SelectIndieOrCorp() {
    const [isIndi, setIsIndi] = useState(null);

    const navigate = useNavigate();

    const handleAfterSelect = () => {
        if (isIndi === null) return;
        if (isIndi) navigate('/donate/indi');
        else navigate('/donate/corp');
    }

    // to={`/shop/${product.id}`}

    return (
        <div className='select-indi-or-corp-page'>
            <Header />
            <div className='select-indi-or-corp-container'>
                <div className='indi-corp-buttons-div'>
                    <button className='indi-corp-button' onClick={() => setIsIndi(true)} style={isIndi ? {boxShadow: "0px 10px 40px 0px rgba(174, 174, 174, 0.20)"} : {}}>
                        <img src={indi_img} alt='indi-img' className='image-indi-corp'/>
                        Individual
                    </button>
                    <button className='indi-corp-button'  onClick={() => setIsIndi(false)} style={isIndi != null && !isIndi ? {boxShadow: "0px 10px 40px 0px rgba(174, 174, 174, 0.20)"} : {}}>
                        <img src={corp_img} alt='corp-img' className='image-indi-corp'/>
                        Corporate
                    </button>
                </div>
                <div className='div-para-select-indi-corp'>
                    <p>Select Your Preferred Option to Proceed</p>
                </div>
                <ButtonUni
                    height="66.1px"
                    width="455px"
                    content="Continue"
                    onClick={handleAfterSelect}
                    margin_top="24px"
                />
            </div>
        </div>
    );
}

export default SelectIndieOrCorp;
