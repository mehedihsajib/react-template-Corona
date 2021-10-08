import React from 'react';
import AboutArea from '../sections/about/AboutArea';
import Blog from '../sections/blog/Blog';
import Faq from '../sections/faq/Faq';
import Features from '../sections/features/Features';
import Hero from '../sections/Hero/Hero';
import Prevention from '../sections/prevention/Prevention';
import Process from '../sections/process/Process';
import Services from '../sections/services/Services';
import Team from '../sections/team/Team';

const Home = () => (
    <>
        <Hero />
        <Features />
        <Services />
        <AboutArea />
        <Team />
        <Process />
        <Prevention />
        <Faq />
        <Blog />
    </>
);

export default Home;
