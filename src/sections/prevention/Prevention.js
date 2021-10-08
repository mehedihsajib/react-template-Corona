/* eslint-disable no-unused-vars */
import React from 'react';
import prevention from '../../assets/data/prevention';
import headerIcon from '../../assets/images/lg.png';
import SectionHeader from '../../components/SectionHeader';
import PreventionItem from './PreventionItem';

const Prevention = () => (
    <div className="prevention_area bg_img pb-60 pt-80">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title center mb-5">
                        <SectionHeader
                            icon={headerIcon}
                            mainHeading="Prevention &#38; Advice Specialist"
                            smallHeading="PREVENTION"
                            desc="The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Also the symptoms may appear 2-14 days after exposure."
                        />
                    </div>
                </div>
            </div>
            <div className="row gx-5">
                {prevention.map((item, index) => (
                    <PreventionItem
                        icon={item.icon}
                        title={item.title}
                        text={item.text}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    </div>
);

export default Prevention;
