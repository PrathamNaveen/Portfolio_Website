import React from 'react';
import './static/styles.css';

function CustomButton ({ text, link }){
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300 transform hover:scale-105">
            <a href={link}>
                {text}
            </a>
        </button>
    );
};

export default CustomButton;