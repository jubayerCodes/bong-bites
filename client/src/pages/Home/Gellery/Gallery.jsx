import React from 'react';
import gallery1 from '../../../assets/images/1.jpg'
import gallery2 from '../../../assets/images/2.jpg'
import gallery3 from '../../../assets/images/3.jpg'
import gallery4 from '../../../assets/images/4.jpg'
import GalleryItem from './GalleryItem/GalleryItem';

const Gallery = () => {
    return (
        <section className='gallery'>
            <div className='grid grid-cols-4 justify-between gap-0 items-center'>
                <GalleryItem img={gallery1} name={'Chicken Osso'} />
                <GalleryItem img={gallery2} name={'Chicken File'} />
                <GalleryItem img={gallery3} name={'Cherry Desserts'} />
                <GalleryItem img={gallery4} name={'Coffee Cocktail'} />
            </div>
        </section>
    );
};

export default Gallery;