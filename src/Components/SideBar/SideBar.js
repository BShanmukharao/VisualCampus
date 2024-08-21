import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse, faCartShopping, faBullhorn, faEarthAmericas, faGraduationCap,
  faChartSimple, faCashRegister, faBuildingColumns, faCaretRight, faLock,
  faChalkboardUser, faNewspaper, faRegistered, faEnvelopesBulk,
  faLocationDot, faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import './SideBarJquery'
import './SideBar.css'
import '../Images/vclogo.png'



const SideBar = () => {
  return (
    <div className='container'>
      <div className='sidebar'>
        <div className='head'>
          <div className='user-img'>
            <img src="vclogo.png" alt='logo' />
          </div>
          <div className='user-details'>
            <p className='title'>Visual Campus</p>
            <p className='name'></p>
          </div>
        </div>
        <div className='nav'>
          <div className='menu'>
            <ul>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faHouse} className='icon' />
                  <span className='text'>Dashboard</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faCartShopping} className='icon' />
                  <span className='text'>Collect Fee</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faBullhorn} className='icon' />
                  <span className='text'>Concession Request</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faEarthAmericas} className='icon' />
                  <span className='text'>Online Fee Trans</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faGraduationCap} className='icon' />
                  <span className='text'>Student Dashboard</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faChartSimple} className='icon' />
                  <span className='text'>Student Strength Statistics</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faCashRegister} className='icon' />
                  <span className='text'>Fee Registers</span>
                  <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                </a>
                <ul className='sub-menu'>
                  <li>
                    <a>
                      <span className='text'>Regular School Fee</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className='text'>Transport Fee</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className='text'>New Admissions</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className='text'>Misc Fee</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className='text'>Uniforms Fee</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className='text'>Books Fee</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faBuildingColumns} className='icon' />
                  <span className='text'>Students Info</span>
                  <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faChalkboardUser} className='icon' />
                  <span className='text'>Staff Info</span>
                  <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                </a>
                <ul className='sub-menu'>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span className='text'>Employee Master List</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span className='text'>Subject Wise Faculties</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span className='text'>Class Teacher List</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faNewspaper} className='icon' />
                  <span className='text'>Progress Reports</span>
                  <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                </a>
                <ul className='sub-menu'>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span className='text'>Marks Check List</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span className='text'>Graphical Report Card</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span className='text'>Class wise Ranks/G.P.A's List</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span className='text'>Topper List</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span className='text'>Failed List</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span className='text'>Performance Graph</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className='text'>Performance Abstract</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faRegistered} className='icon' />
                  <span className='text'>Attendance Registers</span>
                  <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                </a>
                <ul className='sub-menu'>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span className='text'>Absentees List</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span className='text'>General Attendance</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span className='text'>Attendance %</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span className='text'>Late Comers List</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faEnvelopesBulk} className='icon' />
                  <span className='text'>Bulk SMS Manager</span>
                  <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                </a>
                <ul className='sub-menu'>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span className='text'>Send SMS</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span className='text'>Instant SMS</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span className='text'>SMS Sent Status Report</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faLocationDot} className='icon' />
                  <span className='text'>School Vehicles Tracking</span>
                  <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                </a>
                <ul className='sub-menu'>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span className='text'>Buses</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span className='text'>Cars</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span className='text'>Others</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faLock} className='icon' />
                  <span className='text'>Manage Users</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;