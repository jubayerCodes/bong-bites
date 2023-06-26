import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import FeaturedMenuCard from './FeaturedMenuCard/FeaturedMenuCard';

const FeaturedMenu = () => {


    const [loading, setLoading] = useState(true)

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('https://server-sepia-nu.vercel.app/recipes')
            .then(res => res.json())
            .then(data => {

                const filteredRecipes = data.filter(recipe => recipe.featured === true)

                const slicedRecipes = filteredRecipes.slice(0, 6)

                setRecipes(slicedRecipes)
                setLoading(false)
            })
    }, [])

    return (
        <section className='featuredMenu-section bg-[#101418]'>
            <div className="featuredMenu-container my-container py-28 px-5 xl:px-0">
                <SectionTitle title={'Try Our Daily Offers'} miniTitle={'from our menu'} />
                <div className='featuredMenu-items mt-16'>
                    {
                        recipes.map(recipe => <FeaturedMenuCard key={recipe.id} recipe={recipe} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default FeaturedMenu;