import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import { toast } from 'react-toastify';
import { addToStorage, getStorage } from '../../../utilities/localStorage';
import LazyLoad from 'react-lazy-load';

const SingleRecipeCard = ({ recipe }) => {

    const storage = getStorage('favorites')

    const [favorites, setFavorites] = useState(storage)

    const { img_url, id, name, ingredients, method, rating } = recipe

    const previousFavorites = favorites

    const exist = previousFavorites.find(favorite => favorite === id)

    const [isExist, setIsExist] = useState(!!exist)

    const handleFavorites = (id) => {

        if (exist) {
            toast.error('Already Added', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        } else {

            toast.success('added successfully', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            previousFavorites.push(id)

            setFavorites(previousFavorites)
            setIsExist(true)

            addToStorage(id)
        }
    }


    return (
        <div className="card w-full bg-[#101418] shadow-xl rounded-[5px] border border-[#c6a77d71]">

            <LazyLoad height={300} threshold={0.95} offset={300}>
                <figure style={{ height: '300px' }}><img src={img_url} style={{ height: '100%', width: '100%' }} alt="chef" /></figure>
            </LazyLoad>
            <div className="card-body text-white p-6">
                <h2 className="card-title text-white">{name}</h2>
                <div className="ingredients mt-5">
                    <b>Ingredients:</b>
                    <ul className='list-disc list-inside mt-3'>
                        {
                            ingredients && ingredients.slice(0, 3).map((i, idx) => <li className='list-item' key={idx}>{i}</li>)
                        }
                    </ul>
                </div>
                <p className='mt-5 section-desc'>
                    Method: {
                        (method.length > 30) ? `${method.split(' ').slice(0, 30).join(' ')}...` : method
                    }
                </p>
                <div className="ratings mt-3">
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={rating}
                        readOnly
                    />
                </div>
                <div className="card-actions justify-start mt-5">

                    {
                        isExist ?
                            <>
                                <button className="btn text-sm rounded-none py-4 px-6 text-white btn-disabled">Added To Favorites</button>
                            </>

                            :

                            <>
                                <button className="btn text-sm rounded-none py-4 px-6" onClick={() => handleFavorites(id)}>Favorite</button>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleRecipeCard;