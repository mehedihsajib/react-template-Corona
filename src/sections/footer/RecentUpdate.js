import React from 'react';
import { Link } from 'react-router-dom';

const RecentUpdate = ({ title, thumb, text, meta, link }) => (
    <div className="single_footer">
        <div className="single_footer_title pb-4">
            <h4>{title}</h4>
        </div>
        <div className="single_footer_recent">
            <div className="single_footer_recent_thumb">
                <img src={thumb} alt="thumbnail" />
            </div>
            <div className="single_footer_recent_content">
                <Link to={link}>{text}</Link>
                <span>{meta}</span>
            </div>
        </div>
    </div>
);

export default RecentUpdate;
