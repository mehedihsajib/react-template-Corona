import React from 'react';

const FooterShapes = ({ shapeIcon, className }) => (
    <div className="footer_shape">
        <div className="clouds">
            <img src={shapeIcon} alt="icon" className={className} />
        </div>
    </div>
);

export default FooterShapes;
