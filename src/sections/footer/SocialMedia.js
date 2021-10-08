import React from 'react';

const SocialMedia = ({ title, text, address, telephone, email }) => (
    <div className="single_footer">
        <div className="single_footer_title pb-4">
            <h4>{title}</h4>
        </div>
        <div className="single_footer_text">
            <p>{text}</p>
        </div>
        <div className="single_footer_address">
            <ul>
                <li>
                    <span>Address:</span> {address}
                </li>
                <li>
                    <span>Telephone:</span> {telephone}
                </li>
                <li>
                    <span>Email:</span> {email}
                </li>
            </ul>
        </div>
    </div>
);

export default SocialMedia;
