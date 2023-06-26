import React from 'react';

const FeaturedMenuCard = ({ recipe }) => {

    const { img_url, category, price, name } = recipe

    return (
        <div className='featuredMenu-card grid grid-cols-6 gap-4 justify-between items-start'>
            <img src={img_url} alt="" className='w-[80px] h-[80px]' />
            <div className='col-span-4'>
                <div className='flex justify-start gap-5 items-center mb-2'>
                    <h3 className='text-[22px] text-white'>{name}</h3>
                    <hr className='border-[#c6ab7d] flex-1' />
                </div>
                <p className='text-base text-[#ffffffcc]'>{category}</p>
            </div>
            <span className='text-[22px] text-[#c6ab7d]'>$ {price}</span>
        </div>
    );
};

export default FeaturedMenuCard;