import BreadCrumb from '@/components/modules/BreadCrumb/BreadCrumb';
import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:4000/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username:name,
                email,
                body:subject,
                message,
            }),
        });
        if (res.ok) {
            alert('Congrats! We have received your message.');
            setEmail('');
            setName('');
            setSubject('');
            setMessage('');
        } else {
            alert('An Unknown Error has occurred! Try Again.');
        }
    };

    return (
        <>
            <BreadCrumb label={'Contact Us'} />
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="section-title">
                        <h4 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Contact Us</h4>
                        <h1 className="display-4">Feel Free To Contact</h1>
                    </div>
                    <div className="row px-3 pb-2">
                        <div className="col-sm-4 text-center mb-3">
                            <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
                            <h4 className="font-weight-bold">Address</h4>
                            <p>123 Street, New York, USA</p>
                        </div>
                        <div className="col-sm-4 text-center mb-3">
                            <i className="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
                            <h4 className="font-weight-bold">Phone</h4>
                            <p>+012 345 6789</p>
                        </div>
                        <div className="col-sm-4 text-center mb-3">
                            <i className="far fa-2x fa-envelope mb-3 text-primary"></i>
                            <h4 className="font-weight-bold">Email</h4>
                            <p>info@example.com</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 pb-5">
                            <iframe
                                className="w-full h-[443px] border-none"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                frameBorder="0"
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                        <div className="col-md-6 pb-5">
                            <div className="contact-form">
                                <div id="success"></div>
                                <form onSubmit={sendMessage} name="sentMessage" id="contactForm">
                                    <div className="control-group">
                                        <input
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            type="text"
                                            className="form-control bg-transparent p-4"
                                            id="name"
                                            placeholder="Your Name"
                                            required
                                            data-validation-required-message="Please enter your name"
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            className="form-control bg-transparent p-4"
                                            id="email"
                                            placeholder="Your Email"
                                            required
                                            data-validation-required-message="Please enter your email"
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            type="text"
                                            className="form-control bg-transparent p-4"
                                            id="subject"
                                            placeholder="Subject"
                                            required
                                            data-validation-required-message="Please enter a subject"
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <textarea
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            className="form-control bg-transparent py-3 px-4"
                                            rows="5"
                                            id="message"
                                            placeholder="Message"
                                            required
                                            data-validation-required-message="Please enter your message"
                                        ></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-primary font-weight-bold py-3 px-5"
                                            type="submit"
                                            id="sendMessageButton"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}