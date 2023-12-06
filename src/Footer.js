import './Footer.css'; 
import twitter from './twitter.svg';
import globe from './globe.svg';
import linkedin from './linkedin.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <h5>Company</h5>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section support-info">
          <h5>Support</h5>
          <ul>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Talk to support</a></li>
          </ul>
        </div>
      </div>
      <hr className='footer-divider'></hr>
      <div className="footer-bottom">
        <div className='footer-bottom left-section'>
            <p>© 2023 GadgetCycle. All rights reserved.</p>
        </div>
        <div className='footer-bottom right-section'>
            <ul className='terms'>
                <li><a href='#'>Terms & Conditions</a></li>
                <li><a href='#'>· Privacy Policy</a></li>
            </ul>
            <ul className='social-icons'>
                <li><a href="#"><img src={twitter}></img></a></li>
                <li><a href="#"><img src={globe}></img></a></li>
                <li><a href="#"><img src={linkedin}></img></a></li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
