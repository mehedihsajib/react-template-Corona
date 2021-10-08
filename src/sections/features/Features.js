/* eslint-disable no-unused-vars */
import React from 'react';
import data from '../../assets/data/features';
import FetureItem from './FetureItem';

const Features = () => (
    <div className="feature_area bg_color pb-80" id="features">
        <div className="container">
            <div className="row uper_top">
                {data.map((item, index) => (
                    <FetureItem icon={item.icon} title={item.title} text={item.text} />
                ))}
            </div>
        </div>
    </div>
);

export default Features;
