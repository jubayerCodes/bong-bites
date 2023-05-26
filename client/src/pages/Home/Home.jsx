import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import AboutSection from '../../components/AboutSection/AboutSection';
import ChefSection from './ChefSection/ChefSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';

const Home = () => {

    return (
        <main>
            <section className="home-banner">
                <HomeBanner></HomeBanner>
            </section>

            <AboutSection></AboutSection>

            <section className='chefs-section'>
                <ChefSection></ChefSection>
            </section>
            
            <ServicesSection></ServicesSection>
        </main>
    );
};

export default Home;