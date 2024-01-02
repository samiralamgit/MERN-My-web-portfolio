import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { toast } from 'react-toastify';
import axios from 'axios';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!name || !email || !subject || !message) {
                toast.error('please Provide All Firld!')
            }
            const res = await axios.post('/api/v1/portfolio/send-email', { name, email, subject, message })
            if (res.data.success) {
                setEmail('');
                setMessage('');
                setName('');
                setSubject('');
                toast.success(res.data.message);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container-fluide contact' id='contact'>
            <div className='container p-5'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='text-center' style={{ color: 'white' }}>Contact Me☎️</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h3 className='text-center' style={{ color: 'white' }}>Feel free to reach out to me for any questions or opportunities!</h3>
                    </div>
                </div>
                <div className='row mt-4 justify-content-center align-items-center'>
                    <div className='col-md-6'>
                        <div className='card p-4'>
                            <div className='row'>
                                <div className='col text-center icons'>
                                    <a target='_blank' href='https://www.instagram.com/isamir_alam' className='insta'><FaInstagram /></a>
                                    <Link target='_blank' to='https://www.facebook.com/samir.alam.543792' className='facebook'><FaFacebook /></Link>
                                    <a target='_blank' href='https://www.linkedin.com/in/samir-alam-51b240216' className='linkedin'><FaLinkedin /></a>
                                    <Link target='_blank' to='https://twitter.com/isamiralam' className='twitter'><FaSquareXTwitter /></Link>
                                </div>
                            </div>
                            <div className='line mt-3'></div>
                            <div className='form text-center d-flex flex-column mt-4'>
                                <input
                                    placeholder='Your Name'
                                    className='input-field mb-3'
                                    type='text'
                                    name='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    placeholder='Your Email'
                                    className='input-field mb-3'
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    placeholder='Subject'
                                    className='input-field mb-3'
                                    type='text'
                                    name='subject'
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                                <textarea
                                    rows='5'
                                    placeholder='Message.....'
                                    className='input-field mb-3'
                                    type='text'
                                    name='message'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                <button className='send-btn' type='submit' onClick={handleSubmit}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;