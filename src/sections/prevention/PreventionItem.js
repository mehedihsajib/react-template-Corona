import React from 'react';

const PreventionItem = ({ icon, title, text }) => (
    <div className="col-lg-6 col-md-6 col-sm-12 d-flex">
        <div className="main_prevention mr-5">
            <div className="single_prevention mb-4">
                <div className="single_prevention_thumb mr-3 ">
                    <img src={icon} alt="icon" />
                </div>
                <div className="single_prevention_content">
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    </div>
);

export default PreventionItem;
