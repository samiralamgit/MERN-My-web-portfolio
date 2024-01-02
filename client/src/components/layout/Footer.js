import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className='container-fluild footer'>
                <div className='row'>
                    <div className='col text-center name'>Samir Alam</div>
                </div>
                <div className='row'>
                    <div className='col text-center icons'>
                        <a target='_blank' href='https://www.instagram.com/isamir_alam' className='insta'><FaInstagram /></a>
                        <Link target='_blank' to='https://www.facebook.com/samir.alam.543792' className='facebook'><FaFacebook /></Link>
                        <a target='_blank' href='https://www.linkedin.com/in/samir-alam-51b240216' className='linkedin'><FaLinkedin /></a>
                        <Link target='_blank' to='https://twitter.com/isamiralam' className='twitter'><FaSquareXTwitter /></Link>
                    </div>
                </div>
                <div className='row copy-right'>
                    <div className='col text-center'>
                        <p>&#169; 2024 Samir Alam. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;