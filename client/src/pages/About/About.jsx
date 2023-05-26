import React from 'react';
import Banner from '../../components/Banner/Banner';
import AboutSection from '../../components/AboutSection/AboutSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';

const About = () => {
    return (
        <>
            <Banner title={'About'}></Banner>
            <AboutSection bg="black"></AboutSection>
            <ServicesSection></ServicesSection>
        </>
    );
};

export default About;