/* eslint-disable no-unused-vars */
import React from 'react';
import team from '../../assets/data/team';
import headerIcon from '../../assets/images/lg.png';
import SectionHeader from '../../components/SectionHeader';
import TeamItem from './TeamItem';

const Team = () => (
    <div className="team_area bg_img pb-50 pt-80">
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
                {team.map((item, index) => (
                    <TeamItem
                        key={item.id}
                        icon={item.icon}
                        name={item.name}
                        position={item.position}
                        fb={item.fb}
                        twitter={item.twitter}
                        insta={item.insta}
                        linkedin={item.linkedin}
                    />
                ))}
            </div>
        </div>
    </div>
);

export default Team;
