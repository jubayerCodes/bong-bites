import React from 'react';

const GalleryItem = ({ img, name }) => {
    return (
        <div className='relative gallery-item'>
            <img src={img} className='w-full' alt="" />
            <div className='overlay w-full h-full absolute top-0 left-0 bg-black hidden justify-center items-center flex-col bg-opacity-60 duration-300'>
                <h5 className='text-[#c6ab7d] text-lg'>Food</h5>
                <h3 className='text-2xl text-white mt-3'>
                    {name}
                </h3>
            </div>
        </div>
    );
};

export default GalleryItem;