import React from 'react';
import Navbar from './Navbar';
import './static/styles.css';

function Header({setActiveSection}) {
    return (
        <header className="bg-blue-500 text-white p-4">
            <Navbar setActiveSection={setActiveSection}/>
        </header>
    );
}

export default Header;

