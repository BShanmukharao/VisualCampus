import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPowerOff, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Headerjquery'
import './Header.css'


function Header () {
    
    return (
        <div className='header-bg-container'>
            <div>
                <a data-toggle="tooltip" data-placement="top" title="Toggle sidebar" id='Header-Arrow-Id'><FontAwesomeIcon icon={faCircleArrowRight} className="hamburger-menu" id="header-arrow-icon"/></a>
            </div>
            <div className='bell-icon-with-logout'>
                <a data-toggle="tooltip" data-placement="top" title="See notifications">
                    <FontAwesomeIcon icon={faBell} className="bell-icon" />
                </a>
                <Link to={"/"} className='logout-router-link'>
                    <div className='power-icon-with-span' data-toggle="tooltip" data-placement="top" title="Logout">
                        <FontAwesomeIcon icon={faPowerOff} className='power-icon' /><span className='logout-span'>Logout</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;