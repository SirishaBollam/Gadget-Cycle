import './AdminHeader.css';
import adminlogo from './images/adminlogo.svg';

function AdminHeader() {
    return (
        <div className='admin-header'>
            <div className='leftpart'>
                <img src={adminlogo} alt='logo-img' />
            </div>
            <div className='rightpart'>
                
            </div>
        </div>
    );
}

export default AdminHeader;
