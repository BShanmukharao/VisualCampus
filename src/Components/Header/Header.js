import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPowerOff } from '@fortawesome/free-solid-svg-icons';

import './Header.css'

function Header() {
    return (
        <div className='header-bg-container'>
            <FontAwesomeIcon icon={faBell} className={`icon ${'bell-icon'}`}/>
            <div className='powerbutton-content-container'>
                <FontAwesomeIcon icon={faPowerOff} className='icon'/><span className='logout-span'>Logout</span>
            </div>
        </div>
    )
}

export default Header