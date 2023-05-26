import React from 'react';
import aboutImg from '../../assets/images/about3.jpg'

const AboutSection = ({bg}) => {

    return (
        <section className={`${bg ? `bg-${bg}` : 'bg-[#101418]'} about-section w-full  py-28`}>
            <div className="my-container about-container grid grid-cols-1 xl:grid-cols-2 xl:gap-10 gap-5 items-center px-5 xl:p-0">
                <div className="about-content">
                    <h6 className="mini-title">
                        About us
                    </h6>
                    <h2 className="section-title mb-10">
                        Bringing the Taste of Bangladesh to Your Table
                    </h2>
                    <p className="section-desc">
                        Welcome to our authentic Bangladeshi restaurant, where we invite you to experience the rich flavors, spices, and aromas of our country's cuisine. Our menu is inspired by traditional dishes and prepared with locally sourced, fresh ingredients to offer you an unforgettable dining experience.
                    </p>
                </div>
                <div className="about-img flex xl:justify-end">
                    <img src={aboutImg} alt="" className='xl:w-11/12 w-full' />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;