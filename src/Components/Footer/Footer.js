import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../images/footer-logo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {MdLocationOn} from 'react-icons/md'

const Footer = () => {
    return (
        <div className='bg-black mt-10 container md:flex text-white py-16'>
            <div className='md:w-1/3'>
                <img src={footerLogo} alt="Footer Logo" />
                <p className='text-lg py-6'>Pizza, favored by all ages, dates back to 1889. Pizza, garnished with Mozzarella and tomatoes, was normally known as the dish for poor people until it became a famous dish for the wealthy when Queen Margherita had it as a meal as well.</p>
                <div className='flex items-center'>
                    <Link className='px-3 bg-primary mx-1 py-3 rounded' to='/'><FaFacebookF/></Link>
                    <Link className='px-3 bg-primary mx-1 py-3 rounded' to='/'><FaTwitter/></Link>
                    <Link className='px-3 bg-primary mx-1 py-3 rounded' to='/'><FaLinkedinIn/></Link>
                    <Link className='px-3 bg-primary mx-1 py-3 rounded' to='/'><FaInstagram/></Link>
                </div>
            </div>
            <div className='md:pl-14 my-10 md:my-0 md:w-1/3'>
                <h2 className='text-2xl pb-6'>OPENING HOURS</h2>
                <table className='text-lg'>
                    <tbody>
                        <tr>
                            <td className='w-1/2'>Mon - Tues :</td>
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
            <div className='md:w-1/6 text-lg'>
                <h2 className='text-2xl pb-6'>USEFUL LINKS</h2>
                <Link className='hover:text-primary transition-all' to='/'>Privacy Policy</Link><br />
                <Link className='hover:text-primary transition-all' to='/'>Order Tracking</Link><br />
                <Link className='hover:text-primary transition-all' to='/'>About</Link><br />
                <Link className='hover:text-primary transition-all' to='/'>Contact Us</Link><br />
                <Link className='hover:text-primary transition-all' to='/'>Blog</Link>
            </div>
            <div className='text-lg'>
                <h2 className='text-2xl pb-6'>CONTACT INFO</h2>
                <div className='flex items-center'>
                    <FaPhoneAlt className='text-lg'/><a className='pl-2 hover:text-primary transition-all' href='tel:+8801761614500'>+8801761614500</a>
                </div>
                <div className='flex my-2 items-center'>
                    <HiOutlineMail className='text-2xl'/><a className='pl-2 hover:text-primary transition-all' href="mailto:mdrobin.rana45@gmail.com">mdrobin.rana45@gmail.com</a>
                </div>
                <div className='flex items-center'>
                    <MdLocationOn className='text-2xl'/><span className='pl-2'>Gazipur, Dhaka, Bangladesh</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;