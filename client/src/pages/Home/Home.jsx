import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import AboutSection from '../../components/AboutSection/AboutSection';
import ChefSection from './ChefSection/ChefSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import Gallery from './Gellery/Gallery';
import FeaturedMenu from './FeaturedMenu/FeaturedMenu';

const Home = () => {

    return (
        <main>

            <HomeBanner></HomeBanner>
            <AboutSection></AboutSection>
            <Gallery></Gallery>
            <FeaturedMenu />
            <ChefSection></ChefSection>
            <ServicesSection></ServicesSection>
        </main>
    );
};

export default Home;