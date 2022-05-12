import React from 'react';
import Header from './Header'
import SideMenu from './SideMenu'
// import DashBody from './DashBody'
import Footer from './Footer'

const Dashboard = () => {
    return (
        <>
            <Header />
            {/* <DashBody /> */}
            <SideMenu />
            <Footer />
        </>
    )
}

export default Dashboard