import React from 'react';
import bannerBg from '../../assets/images/breadcrumb.jpg';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { FaGreaterThan, FaHome } from 'react-icons/fa';

const Banner = ({ title, children }) => {

    const styles = {
        backgroundImage: `url(${bannerBg})`
    }

    return (
        <section className='banner' style={styles}>
            <div className="banner-container my-container capitalize text-center xl:text-left">
                <h2 className="section-title mb-5">
                    {title}
                </h2>
                <div className="breadcrumb text-white flex justify-center xl:justify-start items-center gap-3">
                    <Link to='/' className='flex items-center gap-2 hover:text-[#C6A87D] duration-200'>
                        <FaHome />
                        Home
                    </Link>
                    <h2 className='text-2xl'> {'>'} </h2>
                    <p className='text-[#C6A87D]'>{title}</p>
                </div>
                {children}
            </div>
        </section>
    );
};

export default Banner;