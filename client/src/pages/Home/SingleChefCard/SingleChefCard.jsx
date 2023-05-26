import { Rating } from '@smastrom/react-rating';
import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const SingleChefCard = ({ chef }) => {

    const { picture_url, name, years_experience, num_recipes, likes, id, recipes, rating } = chef

    return (
        <div className="card w-full bg-[#101418] shadow-xl rounded-[5px] border border-[#c6a77d71]">
            <LazyLoad height={567} threshold={0.95} offset={300}>
                <Link to={`/chefs/${id}`}><figure><img src={picture_url} alt="chef" /></figure></Link>
            </LazyLoad>
            <div className="card-body p-6">
                <h2 className="card-title text-white">{name}</h2>
                <p className='text-white'>{years_experience} years in this field</p>
                <p className='text-white'>Total recipes: {recipes && recipes.length}</p>
                <p className='text-white'>Likes: {likes}</p>
                <div className="ratings mt-3">
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={rating}
                        readOnly
                    />
                </div>
                <div className="card-actions justify-start mt-5">
                    <Link to={`/chefs/${id}`}><button className="btn text-sm rounded-none py-4 px-6">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleChefCard;