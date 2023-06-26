import React from 'react';
import { Zoom } from 'react-reveal';

const GalleryItem = ({ img, name }) => {
    return (
        <div className='relative gallery-item'>
            <img src={img} className='w-full' alt="" />
            <Zoom>
                <div className='overlay w-full h-full absolute top-5 left-5 bg-black hidden justify-center items-center flex-col bg-opacity-60'>
                    <h5 className='text-[#c6ab7d] text-lg'>Food</h5>
                    <h3 className='text-lg xl:text-2xl text-white mt-3'>
                        {name}
                    </h3>
                </div>
            </Zoom>
        </div>
    );
};

export default GalleryItem;