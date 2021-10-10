import React from 'react';
import PageBanner from '../components/pageBanner/PageBanner';
import ContactNow from '../sections/contact/ContactNow';

const Contact = () => (
    <>
        <PageBanner heading="Contact Us" currentPage="Contact" />
        <ContactNow />
    </>
);

export default Contact;
