/* eslint-disable no-unused-vars */
import React from 'react';
import services from '../../assets/data/services';
import headerSecImg from '../../assets/images/lg.png';
import SectionHeader from '../../components/SectionHeader';
import ServicesItem from './ServicesItem';

const Services = () => (
    <div className="service_area bg_img pb-80 pt-100" id="service">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <SectionHeader
                        icon={headerSecImg}
                        smallHeading="SERVICE VIRUS"
                        mainHeading="Corona Virus Symptoms"
                        desc="The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Also the symptoms may appear 2-14 days after exposure."
                    />
                </div>
            </div>
            <div className="row">
                {services.map((item, index) => (
                    <ServicesItem
                        icon={item.icon}
                        title={item.title}
                        desc={item.desc}
                        btnLink={item.btnLink}
                        btnTx={item.btnText}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    </div>
);

export default Services;
