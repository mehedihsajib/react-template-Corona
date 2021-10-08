/* eslint-disable no-unused-vars */
import React from 'react';
import process from '../../assets/data/process';
import headerIcon from '../../assets/images/lg.png';
import SectionHeader from '../../components/SectionHeader';
import ProcessItem from './ProcessItem';

const Process = () => (
    <div className="process_area bg_color pb-50 pt-80">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title center mb-5">
                        <SectionHeader
                            icon={headerIcon}
                            smallHeading="CORONA VIRUS DOCTOR"
                            mainHeading="Coronavrius Specialist"
                            desc="The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Also the symptoms may appear 2-14 days after exposure."
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                {process.map((item, index) => (
                    <ProcessItem icon={item.icon} index={item.index} text={item.text} />
                ))}
            </div>
        </div>
    </div>
);

export default Process;
