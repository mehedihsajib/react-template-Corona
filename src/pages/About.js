import React from 'react';
import PageBanner from '../components/pageBanner/PageBanner';
import AboutArea from '../sections/about/AboutArea';
import Faq from '../sections/faq/Faq';
import Prevention from '../sections/prevention/Prevention';
import Team from '../sections/team/Team';

const About = () => (
    <>
        <PageBanner heading="About" currentPage="About Us" />
        <AboutArea />
        <Team />
        <Faq />
        <Prevention />
    </>
);

export default About;
