import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const AboutPage = () => {
    const [text] = useTypewriter({
        words: ['Programmer', 'Full Stack Developer', ''],
        loop: 0,
        typeSpeed: 100
    })
    return (
        <>
            <div className='container-fluid about' id='about'>
                <div className='container p-5'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='intro-1'>
                                <h1>Hi, I am</h1>
                            </div>
                            <div className='intro-1'>
                                <h1>Samir Alam</h1>
                            </div>
                            <div className='intro-2'>
                                <h2>I am a <span style={{ color: '#e0218a' }}> {text}</span><span style={{ color: 'blue' }}><Cursor /></span></h2>
                            </div>
                            <div className='pragraph mt-4'>
                                <h3>
                                    <p>I am a motivated and versatile individual,
                                        always eager to take on new challenges.
                                        With a passion for learning I am dedicated
                                        to delivering high-quality results.
                                        With a positive attitude and a growth mindset,
                                        I am ready to make a meaningful contribution
                                        and achieve great things.</p>
                                </h3>
                            </div>
                            <div className='btn-1 text-center'>
                                <a href='./resume.pdf' target='download'><button className='resume-btn'>Get Resume</button></a>
                            </div>
                        </div>
                        <div className='col-md-6 text-center p-5 d-flex justify-content-center align-items-center'>
                            <img className='pro-pic' src='./images/sam-p2.jpg' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage;