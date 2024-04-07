// components/ContactModal.jsx
import React, { useState } from 'react';

function ContactModal({ onClose, onSubmit }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phone, address, email });
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <label htmlFor="phone">Phone:</label>
                    <input type="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    <label htmlFor="phone">Address:</label>
                    <input type="address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactModal;
