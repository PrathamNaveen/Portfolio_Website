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
                            url="https://example.com/link1"
                            text="LinkedIn"
                        />
                        <SocialLink
                            url="https://example.com/link2"
                            text="GitHub"
                        />
                        <SocialLink
                            url="https://example.com/link3"
                            text="Twitter"
                        />
                        {/* Add more social links here */}
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
