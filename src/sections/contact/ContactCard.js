import React from 'react';

const ContactCard = ({ title, text1, text2, icon }) => (
    <div className="single_contact_now_inner">
        <div className="single_contact_now_icon">
            <span>{icon}</span>
        </div>
        <div className="single_contact_now_content">
            <h2>{title}</h2>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
    </div>
);

export default ContactCard;
