import React from 'react';
import { FaEnvelope, FaLocationArrow, FaPhone, FaPhoneAlt, FaSearchLocation } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-section bg-black px-5 xl:p-0">
            <div className="my-container footer grid grid-cols-1 xl:grid-cols-4 gap-12 py-16 text-white">
                <div>
                    <Link to="/" className="normal-case text-3xl text-white mb-8">Bong Bites</Link>
                    <p className='text-[#ffffffcc]'>Experience the authentic flavors of Bangladesh at our restaurant, where we serve a variety of dishes including traditional curries, kebabs, and biryanis.</p>
                </div>
                <div>
                    <span className="text-2xl mb-2 text-white">Useful Links</span>

                    <ul className='list-disc list-inside list text-[#C6A87D]'>
                        <li className='list-item mb-3'><Link to="/" className="text-[#ffffffcc] link link-hover">Home</Link></li>
                        <li className='list-item mb-3'><Link to="/about" className="text-[#ffffffcc] link link-hover">About Us</Link></li>
                        <li className='list-item mb-3'><Link to="/blog" className="text-[#ffffffcc] link link-hover">Blog</Link></li>
                        <li className='list-item mb-3'><Link to="/login" className="text-[#ffffffcc] link link-hover">Login</Link></li>
                        <li className='list-item mb-3'><Link to="/register" className="text-[#ffffffcc] link link-hover">Register</Link></li>
                    </ul>
                </div>
                <div>
                    <span className="text-2xl mb-2 text-white">Contact Us</span>
                    <div className="contact-info">
                        <div className="info-grp flex items-center gap-3 mb-3">
                            <FaPhoneAlt color='#C6A87D' />
                            <Link className='text-[#ffffffcc] link link-hover' to="tel: +1800-001-658">+1800-001-658</Link>
                        </div>
                        <div className="info-grp flex items-center gap-3 mb-3">
                            <FaEnvelope color='#C6A87D' />
                            <Link className='text-[#ffffffcc] link link-hover' to="mailto: info@gmail.com">info@gmail.com</Link>
                        </div>
                        <div className="info-grp flex items-center gap-3 mb-3">
                            <FaSearchLocation color='#C6A87D' />
                            <Link className='text-[#ffffffcc] link link-hover' to="tel: +1800-001-658">87, kawlar shial danga, uttara, 1231, <br /> Dhaka, Bangladesh</Link>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <span className="text-2xl mb-2 text-[#ffffffcc] bg-black">Opening Hours</span>
                    <div className="hours-grp flex justify-between items-center cursor-default text-base text-[#ffffffcc] mb-3 border-b pb-2 w-full">
                        <span className="day">
                            Mon - Tue
                        </span>
                        <span className="hours">
                            09:00 am - 10:00 pm
                        </span>
                    </div>
                    <div className="hours-grp flex justify-between items-center cursor-default text-base text-[#ffffffcc] mb-3 border-b pb-2 w-full">
                        <span className="day">
                            Wed - Thu
                        </span>
                        <span className="hours">
                            10.00am - 11.00pm
                        </span>
                    </div>
                    <div className="hours-grp flex justify-between items-center cursor-default text-base text-[#ffffffcc] mb-3 border-b pb-2 w-full">
                        <span className="day">
                            Sat
                        </span>
                        <span className="hours">
                            07.00am - 08.00pm
                        </span>
                    </div>
                    <div className="hours-grp flex justify-between items-center cursor-default text-base text-[#ffffffcc] mb-3 border-b pb-2 w-full">
                        <span className="day">
                            Sun
                        </span>
                        <span className="hours">
                            9:00 am - 8 Pm
                        </span>
                    </div>
                </div>
            </div>
            <div className="footer-rights border-t border-[#c6a77d60] bg-black py-8">
                <p className='text-white text-center mb-0'>Copyright 2023 Bong Bites. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;