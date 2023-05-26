import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import ChefInfo from './ChefInfo/ChefInfo';
import Recipes from './Recipes/Recipes';

const SingleChef = () => {

    const [loading, setLoading] = useState(true)

    const [allRecipes, setAllRecipes] = useState([])

    const chef = useLoaderData()

    const { recipes } = chef

    useEffect(() => {
        fetch('https://server-sepia-nu.vercel.app/recipes')
            .then(res => res.json())
            .then(data => {
                const filteredRecipes = recipes?.map(r => {
                    const SingleRecipeCard = data.find(d => parseInt(d.id) === r)
                    return SingleRecipeCard
                })

                setAllRecipes(filteredRecipes)
                setLoading(false)
            })
    }, [])

    return (
        <>
            {
                chef ?
                    <>
                        <Banner title={'Chef'}></Banner>
                        <ChefInfo chef={chef}></ChefInfo>
                        <Recipes recipes={allRecipes} chef={chef} loading={loading} ></Recipes>
                    </>
                    :
                    <>
                        <Banner title={'No Chef Found'}></Banner>
                    </>
            }
        </>
    );
};

export default SingleChef;