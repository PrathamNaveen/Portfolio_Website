import React from 'react';
import './static/styles.css';

function About() {
    return (
        <div className="flex flex-col items-center justify-center h-full p-4 py-36">
            <div className="text-3xl font-bold mb-4">About</div>
            <div className="text-lg text-center">
                <p className="mb-2">A Web Development Enthusiast with knowledge of</p>
                <p className="mb-2">The MERN stack and Python Stack, currently</p>
                <p className="mb-2">Pursuing my Undergraduate Course in Computer Science and Engineering. I love to solve problems</p>
                <p className="mb-2">And I am strong in Data Structures and Algorithms.</p>
                <p className="mb-2">I am also currently applying Machine Learning Algorithms for my Web Development and working towards becoming a Full Stack Data Scientist by the end of my Undergraduate Program. I am very passionate about the field of technology and hoping one day will be able to contribute something great for the community.</p>
            </div>
        </div>
    );
}

export default About;