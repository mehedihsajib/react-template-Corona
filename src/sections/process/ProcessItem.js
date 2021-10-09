import React from 'react';

const ProcessItem = ({ icon, index, text }) => (
    <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="single_process mb-4">
            <div className="single_process_thumb">
                <img src={icon} alt="" />
                <div className="single_process_number">
                    <span>{index}</span>
                </div>
            </div>

            <div className="single_process_content pt-3">
                <h5>{text}</h5>
            </div>
        </div>
    </div>
);

export default ProcessItem;
