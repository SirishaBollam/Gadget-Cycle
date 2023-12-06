import './Header.css';
import HeaderLeft from './HeaderLeft';
import HeaderMiddleAndRight from './HeaderMiddleAndRight';

function Header() {
    return (
        <div className='con-header-final'>
            <HeaderLeft />
            <HeaderMiddleAndRight />
        </div>
    );
}

export default Header;
