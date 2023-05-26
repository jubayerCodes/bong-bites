import React from 'react';

const ServicesSection = () => {
    return (
        <section className='services-section bg-[#101418] py-28 px-5 xl:px-0'>
            <div className="services-container my-container">
                <h6 className="mini-title text-center">
                    Services
                </h6>
                <h2 className="section-title text-center">
                    Top class Service
                </h2>
                <div className="service-cards-container grid grid-cols-1 xl:grid-cols-3 text-white gap-8 mt-10">
                    <div className="service-card hover:border-white duration-200 border border-[#C6A87D] p-10 rounded-sm">
                        <h3 className="card-title block text-center mb-5 text-3xl">
                            Fresh Product
                        </h3>
                        <p className="card-desc text-center text-[#ffffffcc] font-normal">
                            At our restaurant, fresh foods are at the heart of everything we do. We believe that the best-tasting, healthiest meals come from using the freshest, most wholesome ingredients available.
                        </p>
                    </div>
                    <div className="service-card hover:border-white duration-200 border border-[#C6A87D] p-10 rounded-sm">
                        <h3 className="card-title block text-center mb-5 text-3xl">
                            Skilled Chefs
                        </h3>
                        <p className="card-desc text-center text-[#ffffffcc] font-normal">
                            Our restaurant boasts a team of skilled chefs, each with a passion for creating delicious, inventive dishes that showcase the quality and freshness of our ingredients.
                        </p>
                    </div>
                    <div className="service-card hover:border-white duration-200 border border-[#C6A87D] p-10 rounded-sm">
                        <h3 className="card-title block text-center mb-5 text-3xl">
                            Vegan Cuisine
                        </h3>
                        <p className="card-desc text-center text-[#ffffffcc] font-normal">
                            Our restaurant offers a wide range of delicious vegan cuisine that celebrates the flavors and textures of fresh, plant-based ingredients, showcasing our commitment to healthy, sustainable, and ethical dining options.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;