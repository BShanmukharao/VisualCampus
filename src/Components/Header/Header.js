import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPowerOff } from '@fortawesome/free-solid-svg-icons';

import './Header.css'

function Header() {
    return (
        <div className='header-bg-container'>
            <a><FontAwesomeIcon icon={faBell} className='icon'/></a>
            <div>
                <FontAwesomeIcon icon={faPowerOff} className='icon'/><span>Logout</span>
            </div>
        </div>
    )
}

export default Header