import { Routes, Route } from 'react-router-dom';
import { SideBar } from '../SideBar/SideBar'
//import Header from '../Header/Header'
import { Header } from '../Header/Header'
import './Home.css'
import './Homejquery'

import ApplicationsRegistrationFee from '../StudentManagement/DataEntry/NewAdmissions/ApplicationRegistrationFee/ApplicationsRegistrationFee'
import { useEffect } from 'react';

const routes = [
    { path: '/', component: ApplicationsRegistrationFee },  
];


export const Home = () => {

    return (
        <div className='home-bg-container'>
            <SideBar />
            <div className='header-content-bg-container'>
                <Header />
                <div className='each-content-container'>
                    <Routes>
                        {routes.map((route, index) => (
                            <Route exact path={route.path} key={index} element={<route.component />} />
                        ))}
                    </Routes>
                </div>
            </div>
        </div>
    )
}
