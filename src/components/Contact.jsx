import React from "react";
import ContactLinks from "./ContactLinks";

function Contact() {
    const contactStyle = {
        fontSize: "24px",         // Set the font size to make the text larger
        fontFamily: "Arial, sans-serif", // Use a different font (Arial in this case)
        lineHeight: "1.5",         // Add line breaks between lines
        paddingLeft: "20px"        // Pad the text to the left
    };

    return (
        <div className="flex justify-center items-center h-full p-8 py-44 px-20">
            <div className="contact" style={contactStyle}>
                <ContactLinks title="Email" link="mailto:prathamnaveen.m@gmail.com" text="prathamnaveen.m@gmail.com" />
                <ContactLinks title="LinkedIn" link="https://shorturl.at/jlrCK" text="https://LinkedIn.com/in/PrathamNaveen" />
                <ContactLinks title="Github" link="https://github.com/PrathamNaveen" text="https://github.com/PrathamNaveen" />
            </div>
        </div>
    );
}

export default Contact;
