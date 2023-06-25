import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import AboutSection from '../../components/AboutSection/AboutSection';
import ChefSection from './ChefSection/ChefSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import Gallery from './Gellery/Gallery';

const Home = () => {

    return (
        <main>

            <HomeBanner></HomeBanner>

            <AboutSection></AboutSection>


            <ChefSection></ChefSection>

            <ServicesSection></ServicesSection>
            <Gallery></Gallery>
        </main>
    );
};

export default Home;