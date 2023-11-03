import React from "react";
import "./static/styles.css";

function ContactLinks(props) {
    return (
        <div className="contact-link px-16 ml-20">
            <span>{props.title}: </span>
            <a href={props.link}><p className="text-blue-600">{props.text}</p></a>
        </div>
    );
}

export default ContactLinks;
