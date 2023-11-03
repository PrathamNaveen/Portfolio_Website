import React, { useState } from 'react';
import CustomButton from './CustomButton';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './static/styles.css';

function Body({ activeSection }) {
  return (
    <div className="flex items-center justify-center p-8 flex-col sm:flex-row">
      {/* Left Side Container */}
      <div className="flex flex-col items-center space-y-4 p-4">
        {/* Profile Picture */}
        <img
          src="/Pratham.jpg" // Assuming the image is in the "public" directory
          alt="My Profile Picture"
          className="w-48 h-64 rounded-lg mb-8" // Adjusted height, rounded-lg, and added mb-8
        />

        <div className="flex space-x-4">
          <CustomButton
            text="Visit GitHub"
            link="https://github.com/PrathamNaveen"
          />
          <CustomButton
            text="Visit LinkedIn"
            link="https://shorturl.at/jlrCK"
          />
        </div>
      </div>
      {/* Right Side Container */}
      {console.log("activeSection:", activeSection)}
      <div className="right-container p-4">
        {activeSection === 'Home' && <Home />}
        {activeSection === 'About' && <About />}
        {activeSection === 'More Projects' && (
          <div>
            {/* Content for Projects section */}
          </div>
        )}
        {activeSection === 'Contact' && <Contact />}
      </div>
    </div>
  );
}

export default Body;
