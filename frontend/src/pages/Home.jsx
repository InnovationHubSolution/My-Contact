// Home.js
import React, { useState, useEffect } from 'react';
import api from '../api';
import Contact from "../components/Contact";
import ContactModal from '../components/ContactModal';
import "../styles/Home.css";

function Home() {
    const [contacts, setContacts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        getContacts();
    }, []);

    const getContacts = () => {
        api
            .get('/api/contacts/')
            .then((res) => res.data)
            .then((data) => {
                setContacts(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteContact = (id) => {
        api
            .delete(`/api/contacts/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert('Contact deleted!');
                else alert('Failed to delete contact.');
                getContacts();
            })
            .catch((error) => alert(error));
    };

    const handleCreateContact = (contact) => {
        api
            .post('/api/contacts/', contact)
            .then((res) => {
                if (res.status === 201) {
                    setShowSuccessMessage(true);
                    setShowModal(false);
                    getContacts();
                } else {
                    alert('Failed to create contact.');
                }
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <div>
                <center><h2>Your Contacts</h2></center>
                <button className="add-button" onClick={() => setShowModal(true)}>Add Contact</button>
                <div className="contacts-list">
                {contacts.map((contact) => (
                    <Contact contact={contact} onDelete={deleteContact} key={contact.id} />
                ))}
                </div>
            </div>
            
            {showModal && <ContactModal onClose={() => setShowModal(false)} onSubmit={handleCreateContact} />}
            {showSuccessMessage && (
                <div className="success-message">
                    <p>Contact created successfully!</p>
                    <button onClick={() => setShowSuccessMessage(false)}>Close</button>
                </div>
            )}
        </div>
    );
}

export default Home;
