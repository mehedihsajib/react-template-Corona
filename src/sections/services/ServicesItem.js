import React from 'react';

const ServicesItem = ({ icon, title, desc, btnTxt, btnLink }) => (
    <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="single_service mb-4">
            <div className="single_service_icon rotateme">
                <img src={icon} alt="" />
            </div>
            <div className="single_service_title pt-3 pb-1">
                <h4>{title}</h4>
            </div>
            <div className="single_service_text pt-4">
                <p>{desc}</p>
            </div>
            <div className="single_service_button">
                <a href={btnLink}>{btnTxt}</a>
            </div>
        </div>
    </div>
);

export default ServicesItem;
