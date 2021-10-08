import React from 'react';
import { Link } from 'react-router-dom';

const ImportantLinks = ({
    title,
    link1,
    link2,
    link3,
    link4,
    linkText1,
    linkText2,
    linkText3,
    linkText4,
}) => (
    <div className="single_footer">
        <div className="single_footer_title pb-4">
            <h4>{title}</h4>
        </div>
        <div className="single_footer_body">
            <ul>
                <li>
                    <Link to={link1}>{linkText1}</Link>
                </li>
                <li>
                    <Link to={link2}>{linkText2}</Link>
                </li>
                <li>
                    <Link to={link3}>{linkText3}</Link>
                </li>
                <li>
                    <Link to={link4}>{linkText4}</Link>
                </li>
            </ul>
        </div>
    </div>
);

export default ImportantLinks;
