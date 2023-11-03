import React, { useState } from "react";
import "./static/styles.css";

function Navbar({ setActiveSection }) {
    function handleSectionClick (section) {
        setActiveSection(section);
    };

    return (
        <div className="bg-blue-500 p-4">
            <nav className="flex flex-col sm:flex-row justify-between items-center">
                <div className="text-white text-2xl font-bold">Pratham's Portfolio</div>
                <ul className="flex space-x-4 sm:space-x-16">
                    <li className="text-white">
                        <button onClick={() => handleSectionClick("Home")}>Home</button>
                    </li>
                    <li className="text-white">
                        <button onClick={() => handleSectionClick("About")}>About</button>
                    </li>
                    <li className="text-white">
                        <button onClick={() => handleSectionClick("More Projects")}>More Projects</button>
                    </li>
                    <li className="text-white">
                        <button onClick={() => handleSectionClick("Contact")}>Contact</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
