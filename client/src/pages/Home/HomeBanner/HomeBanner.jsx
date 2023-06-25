import React from 'react';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <section className="home-banner">
            <div className="home-banner-container">
                <div className="banner-content">
                    <h6 className='mini-title'>
                        Make a order
                    </h6>
                    <h2 className="banner-title">
                        enjoy an exceptional journey of taste.
                    </h2>
                    <p className="section-desc">
                        Experience the authentic flavors of Bangladesh at our restaurant, where we serve a variety of dishes including traditional curries, kebabs, and biryanis. Our menu is made with fresh ingredients and spices, providing a culinary journey for your taste buds.
                    </p>
                    <Link to="/about"><button className="btn banner-btn">Read More</button></Link>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;