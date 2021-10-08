import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const SocialLinks = ({ fbLink, twitterLink, linkedinLink, instaLink }) => (
    <div className="footer_icon pt-2">
        <a href={fbLink}>
            <FaFacebookF className="icon" />
        </a>
        <a href={twitterLink}>
            <FaInstagram className="icon" />
        </a>
        <a href={linkedinLink}>
            <FaLinkedinIn className="icon" />
        </a>
        <a href={instaLink}>
            <FaTwitter className="icon" />
        </a>
    </div>
);

export default SocialLinks;
