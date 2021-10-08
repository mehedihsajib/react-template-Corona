import React from 'react';

const FetureItem = ({ icon, title, text }) => (
    <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="single_feature mb-4">
            <div className="single_feature_icon">
                <img src={icon} alt="" />
            </div>
            <div className="single_feature_title pt-3">
                <h4>{title}</h4>
            </div>
            <div className="single_feature_text pt-3">
                <p>{text}</p>
            </div>
        </div>
    </div>
);

export default FetureItem;
