import React from "react";
import "../styles/Contact.css"

function Contact({ contact, onDelete }) {
    return (
        <div className="contact-card">
            <h3>{contact.name}</h3>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Address:</strong> {contact.address}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <button className="delete-button" onClick={() => onDelete(contact.id)}>Delete</button>
        </div>
    );
}

export default Contact;