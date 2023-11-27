import React from 'react';
import SocialLink from './SocialLink';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-200 py-4">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                    <ul className="list-none p-0 flex">
                        <SocialLink
                            url="https://www.linkedin.com/in/prathamnaveen/"
                            text="LinkedIn"
                        />
                        <SocialLink
                            url="https://github.com/PrathamNaveen"
                            text="GitHub"
                        />
                        <SocialLink
                            url="https://twitter.com/pratham_naveen"
                            text="Twitter"
                        />
                    </ul>
                </div>
                <div className="text-center text-gray-600 text-xs mt-4">
                    &copy; {currentYear} Pratham
                </div>
            </div>
        </footer>
    );
}

export default Footer;
