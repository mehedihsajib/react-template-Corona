import React from 'react';
import PageBanner from '../components/pageBanner/PageBanner';
import PreventionSection from '../sections/prevention/Prevention';
import Service from '../sections/services/Services';

const Prevention = () => (
    <>
        <PageBanner heading="Prevention" currentPage="Prevention" />
        <Service />
        <PreventionSection />
    </>
);

export default Prevention;
