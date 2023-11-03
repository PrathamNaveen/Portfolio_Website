import React from 'react';

function SocialLink({ url, text }) {
    return (
        <li className="mb-2 mr-4">
            <a href={url} target="_blank" rel="noopener noreferrer">
                {text}
            </a>
        </li>
    );
}

export default SocialLink;