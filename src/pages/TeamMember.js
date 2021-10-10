import React from 'react';
import PageBanner from '../components/pageBanner/PageBanner';
import Team from '../sections/team/Team';

const TeamMember = () => (
    <>
        <PageBanner heading="Team Member" currentPage="Team Member" />
        <Team />
    </>
);

export default TeamMember;
