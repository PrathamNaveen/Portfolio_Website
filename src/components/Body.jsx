import React from 'react';
import CustomButton from './CustomButton';

function Body() {
    return (
        <div className="flex items-center justify-center p-8">
            {/* Left Side Container */}
            <div className="flex flex-col items-center p-8">
                {/* Profile Picture */}
                <img
                    src="./static/Pratham_image.jpg"
                    alt="My Profile Picture"
                    className="w-48 h-48 rounded-full"
                />

                <div className="flex flex-col items-center space-y-4">
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
            </div>

            <div className="flex flex-wrap p-4">
                <div className="w-full sm:w-1/2 p-2">
                    <div className="bg-gray-100 p-8 rounded-md h-64">Project 1 Overview</div>
                </div>
                <div className="w-full sm:w-1/2 p-2">
                    <div className="bg-gray-100 p-8 rounded-md h-64">Project 2 Overview</div>
                </div>
                <div className="w-full sm:w-1/2 p-2">
                    <div className="bg-gray-100 p-8 rounded-md h-64">Project 3 Overview</div>
                </div>
                <div className="w-full sm:w-1/2 p-2">
                    <div className="bg-gray-100 p-8 rounded-md h-64">Project 4 Overview</div>
                </div>
            </div>

        </div>
    );
}

export default Body;
