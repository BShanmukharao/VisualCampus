import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons';

import './Header.css'

function Header() {
    return (
        <div className='header-bg-container'>
            <div>
                <FontAwesomeIcon icon={faBars} className="hamburger-menu"/>
            </div>
            <div className='bell-icon-with-logout'>
                <FontAwesomeIcon icon={faBell} className="bell-icon" />
                <div className='power-icon-with-span'>
                    <FontAwesomeIcon icon={faPowerOff} className='power-icon' /><span className='logout-span'>Logout</span>
                </div>
            </div>
        </div>
    )
}

export default Header