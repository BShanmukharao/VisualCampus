import SideBar from '../SideBar/SideBar'
import Header  from '../Header/Header'
import ApplicationRegistration from '../ApplicationRegistration/ApplicationRegistration'
import './Home.css'

function  Home() {
    return (
        <div className='home-bg-container'>
           <SideBar />
           <div className='header-content-bg-container'>
               <Header />
               <div>
                 <ApplicationRegistration />
               </div>
           </div>
        </div>
    )
}

export default Home