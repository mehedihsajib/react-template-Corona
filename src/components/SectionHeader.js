import React from 'react';

const SectionHeader = ({ icon, smallHeading, mainHeading, desc, classH2, classH5, classP }) => (
    <div className="section_title mb-5">
        <div className="section_title_thumb rotateme">
            <img src={icon} alt="" />
        </div>
        <div className="section_title_content pt-2">
            <h5 className={classH5}>{smallHeading}</h5>
            <h2 className={classH2}>{mainHeading}</h2>
            <p className={classP}>{desc}</p>
        </div>
    </div>
);

export default SectionHeader;
