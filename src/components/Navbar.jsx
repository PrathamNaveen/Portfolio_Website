import React, { useState } from "react";
import './static/styles.css';

function Navbar() {
    const [showHomePage, setShowHomePage] = useState(true);

    const handleHomeButtonClick = () => {
        setShowHomePage(true);
    };

    return (
        <div className="bg-blue-500 p-4">
            <nav className="flex flex-col sm:flex-row justify-between items-center">
                <div className="text-white text-2xl font-bold">Pratham's Portfolio</div>
                <ul className="flex space-x-4 sm:space-x-16">
                    <li className="text-white">
                        <button onClick={handleHomeButtonClick}>Home</button>
                    </li>
                    <li className="text-white">About</li>
                    <li className="text-white">Projects</li>
                    <li className="text-white">Contact</li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
