import React from 'react';
import { FaPlay } from 'react-icons/fa';
import videoBg from '../../../assets/images/video.jpg'
import Lightbox from 'react-spring-lightbox';
import { useState } from 'react';

const images = [
    {
        src:
            'https://www.youtube.com/watch?v=u31qwQUeGuM&pp=ygURcGxhY2Vob2xkZXIgdmlkZW8%3D',
        alt: 'Windows 10 Dark Mode Setting'
    }
];

const VideoSection = () => {

    return (
        <section style={{ backgroundImage: `url(${videoBg})` }} className='py-80 xl:py-64 flex justify-center bg-center'>
            <button className='text-[#c6ab7d] bg-white p-8 text-lg rounded-full video-icon'>
                <FaPlay />
            </button>
        </section>
    );
};

export default VideoSection;