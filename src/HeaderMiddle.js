import './HeaderMiddle.css';
import { BrowserRouter as Router, Switch, Route, Link, Routes, useNavigate } from 'react-router-dom';


function HeaderMiddle() {
    return (
        <div className='con-header-middle'>
            <nav>
                <ul>
                    <li id='li_home'><Link to="/">Home</Link></li>
                    <li id='li_track_your_impact'><Link to="/trackyourimpact">Track Your Impact</Link></li>
                    <li id='li_shop'><Link to="/shop">Shop</Link></li>
                    <li id='li_about_us'><Link to="/aboutus">About Us</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default HeaderMiddle;
