import React from 'react';
import { Link } from 'react-router-dom';
import sad from '../../assets/images/sad2.png'

const Page404 = () => {
    return (
        <div className="error-section">
            <div className="error-container">
                <h6 className='mini-title mb-0'>
                    Page not found
                </h6>
                <div className="text-[200px] text-[#C6A87D] flex items-center gap-10 mb-0">
                    4
                    <img src={sad} className='xl:w-[160px] xl:-mt-6' alt="" />
                    4
                </div>
                <p className="section-desc">
                    Oops! This Page is Not Found !
                </p>
                <Link to='/'>
                    <button className="btn banner-btn">Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Page404;