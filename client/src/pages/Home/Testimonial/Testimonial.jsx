import React from 'react';
import bgimg from '../../../assets/images/bg-img.jpg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonial = () => {
    return (
        <section style={{ backgroundImage: `url(${bgimg})` }}>
            <div className="my-container">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide></SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;