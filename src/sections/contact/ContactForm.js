import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');

    const submitHandler = (e) => {
        e.preventDefaullt();
    };
    return (
        <div className="contact_area pt-80 pb-70" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-xs-12">
                        <div className="contact-form-main">
                            <form id="contact-form" action="mail.php" method="POST">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                                <textarea
                                    name="message"
                                    id=""
                                    cols="30"
                                    rows="10"
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                <button onSubmit={submitHandler} type="submit">
                                    Send Message
                                </button>
                            </form>
                            <p className="form-message" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="google_map_area">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="google_map_area">
                                        <iframe
                                            title="map"
                                            className="map"
                                            src="https://snazzymaps.com/embed/65241"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
