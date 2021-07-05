import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header/>

            <main className="top-level container">
                {children}
            </main>
            
            <Footer/>
        </div>
    )
}

export default Layout;