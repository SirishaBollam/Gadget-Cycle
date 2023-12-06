import './AboutUsTopSection.css';
import topsecImg from './images/aboutus_top_sec_img.svg';

function AboutUsTopSection() {
    return (
        <div className='aboutus-top-section'>
            <div className='heading'>
                <h1>About Us</h1>
                <h4>Contribute your old tech gadgets and help bridge the digital divide while supporting educational causes.</h4>
            </div>
            <img src={topsecImg} alt='aboutus-top-section-img' />
        </div>
    );
}

export default AboutUsTopSection;
