import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header/>
            
            <main className="top-level container products">
            <header className="heading">
            <div className="white">

            </div>
            <h1>Our products</h1>
            
            </header>
                {children}
            </main>
            
            <Footer/>
        </div>
    )
}

export default Layout;