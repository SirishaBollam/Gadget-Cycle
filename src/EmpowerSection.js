import './EmpowerSection.css';
import EmpoweringImage from './empowering_image.webp';
import ProudPartners from './ProudPartners';
import { BrowserRouter as Router, Switch, Route, Link, Routes, useNavigate } from 'react-router-dom';

function EmpowerSection() {
    const navigate = useNavigate();

    return (
        <div className='empower-section'>
            <div className='empower-section-heading'>
                <h1>Empower Education with GadgetCycle</h1>
                <h5>Contribute your old tech gadgets and help bridge the digital divide while supporting educational causes.</h5>
            </div>
            <button onClick={() => navigate("/donate")}>Donate</button>
            <img src={EmpoweringImage} alt="empowering_image" className='empower-image'/>
            <ProudPartners className='proud-partners'/>
        </div>
    );
}

export default EmpowerSection;
