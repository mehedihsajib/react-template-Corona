import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const TeamItem = ({ icon, name, position, fb, twitter, linkedin, insta }) => (
    <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="single_team mb-4">
            <div className="single_team_thumb">
                <img src={icon} alt="" />
            </div>
            <div className="single_team_icon">
                <div className="single_team_icon_inner">
                    <a href={fb}>
                        <FaFacebookF className="icon" />
                    </a>
                    <a href={twitter}>
                        <FaTwitter className="icon" />
                    </a>
                    <a href={linkedin}>
                        <FaInstagram className="icon" />
                    </a>
                    <a href={insta}>
                        <FaLinkedinIn className="icon" />
                    </a>
                </div>
            </div>
            <div className="single_team_content">
                <h4>{name}</h4>
                <span>{position}</span>
            </div>
        </div>
    </div>
);

export default TeamItem;
