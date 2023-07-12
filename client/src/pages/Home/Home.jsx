import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import AboutSection from '../../components/AboutSection/AboutSection';
import ChefSection from './ChefSection/ChefSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import Gallery from './Gellery/Gallery';
import FeaturedMenu from './FeaturedMenu/FeaturedMenu';
import VideoSection from './VideoSection/VideoSection';
import Testimonial from './Testimonial/Testimonial';
import BookATable from '../../components/BookATable/Booking';
import Booking from '../../components/BookATable/Booking';

const Home = () => {

    return (
        <main>

            <HomeBanner></HomeBanner>
            <AboutSection></AboutSection>
            <Gallery></Gallery>
            <FeaturedMenu />
            <ChefSection></ChefSection>
            {/* <Testimonial /> */}
            <ServicesSection></ServicesSection>
            <VideoSection />
            <Booking />
        </main>
    );
};

export default Home;