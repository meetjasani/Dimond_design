import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

const Layout = ({ children }) => {
    return (
        // <div className="2xl:container mx-auto">
        <div className="overflow-hidden h-screen">
            <Header />
            <div className="flex bg-scogof8 ">
                <div><Sidebar /></div>
                <div className="2xl:pl-24 xl:pl-20  w-full pb-20 lg:pb-10">
                    {children}
                    
                </div>
            </div>
            <Footer />
        </div>
        // </div>
    )
}

export default Layout
