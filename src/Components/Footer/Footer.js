import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../images/footer-logo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {MdLocationOn} from 'react-icons/md'

const Footer = () => {
    return (
        <div className='flex '>
            <div>
                <img src={footerLogo} alt="Footer Logo" />
                <p>Pizza, favored by all ages, dates back to 1889. Pizza, garnished with Mozzarella and tomatoes, was normally known as the dish for poor people until it became a famous dish for the wealthy when Queen Margherita had it as a meal as well.</p>
                <div className='flex items-center justify-between'>
                    <Link to='/'><FaFacebookF/></Link>
                    <Link to='/'><FaTwitter/></Link>
                    <Link to='/'><FaLinkedinIn/></Link>
                    <Link to='/'><FaInstagram/></Link>
                </div>
            </div>
            <div>
                <h2>OPENING HOURS</h2>
                <table>
                    <thead>Table</thead>
                    <tbody>
                        <tr>
                            <td>Mon - Tues :</td>
                            <td>6.00 am - 10.00 pm</td>
                        </tr>
                        <tr>
                            <td>Wednes - Thurs :</td>
                            <td>6.00 am - 10.00 pm</td>
                        </tr>
                        <tr>
                            <td>Launch :</td>
                            <td>Everyday</td>
                        </tr>
                        <tr>
                            <td>Sunday :</td>
                            <td>Closed</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h2>USEFUL LINKS</h2>
                <Link to='/'>Privacy Policy</Link><br />
                <Link to='/'>Order Tracking</Link><br />
                <Link to='/'>About</Link><br />
                <Link to='/'>Contact Us</Link><br />
                <Link to='/'>Blog</Link>
            </div>
            <div>
                <h2>CONTACT INFO</h2>
                <div className='flex items-center'>
                    <FaPhoneAlt/><a href='tel:+8801761614500'>+8801761614500</a>
                </div>
                <div className='flex items-center'>
                    <HiOutlineMail/><a href="mailto:mdrobin.rana45@gmail.com">mdrobin.rana45@gmail.com</a>
                </div>
                <div className='flex items-center'>
                    <MdLocationOn/><span>Gazipur, Dhaka, Bangladesh</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;