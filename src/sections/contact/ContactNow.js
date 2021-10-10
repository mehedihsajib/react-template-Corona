import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import headerIcon from '../../assets/images/lg.png';
import SectionHeader from '../../components/SectionHeader';
import ContactCard from './ContactCard';

const ContactNow = () => (
    <div className="contact_area bg_color2 pt-80 pb-70" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title center color_black mb-5">
                        <SectionHeader
                            classH2="black-heading"
                            classP="grey-text"
                            icon={headerIcon}
                            mainHeading="Contact Now"
                            desc="The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Also the symptoms may appear 2-14 days after exposure."
                        />
                    </div>
                </div>
            </div>
            {/* Single Contact */}
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="single_contact_now">
                        <div className="single_contact_now_inner">
                            <ContactCard
                                icon={<FaPhoneAlt />}
                                text1="+088 385 659 258"
                                text2="(258) 698 654 8745"
                                title="Phone Number"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="single_contact_now">
                        <div className="single_contact_now_inner">
                            <ContactCard
                                icon={<FaRegEnvelope />}
                                text1="info@example.com"
                                text2="(gmail@example.com"
                                title="Email Address"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="single_contact_now">
                        <div className="single_contact_now_inner">
                            <ContactCard
                                icon={<FaMapMarkerAlt />}
                                text1="56/A-102-Middle Point, USA"
                                text2="New York, US"
                                title="Office Address"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ContactNow;
