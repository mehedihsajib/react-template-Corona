import React from 'react';
import PageBanner from '../components/pageBanner/PageBanner';
import ContactForm from '../sections/contact/ContactForm';
import ContactNow from '../sections/contact/ContactNow';

const Contact = () => (
    <>
        <PageBanner heading="Contact Us" currentPage="Contact" />
        <ContactNow />
        <ContactForm />
    </>
);

export default Contact;
