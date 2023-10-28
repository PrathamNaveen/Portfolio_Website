// src/components/header.jsx
import React from 'react';
import Navbar from './Navbar';
import './static/styles.css';

function Header() {
    return (
        <header className="bg-blue-500 text-white p-4">
            <Navbar />
        </header>
    );
}

export default Header;

