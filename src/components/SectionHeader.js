import React from 'react';

const SectionHeader = ({ icon, smallHeading, mainHeading, desc }) => (
    <div className="section_title mb-5">
        <div className="section_title_thumb rotateme">
            <img src={icon} alt="" />
        </div>
        <div className="section_title_content pt-2">
            <h5>{smallHeading}</h5>
            <h2>{mainHeading}</h2>
            <p>{desc}</p>
        </div>
    </div>
);

export default SectionHeader;
