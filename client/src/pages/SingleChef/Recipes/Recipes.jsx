import React, { useEffect, useState } from 'react';
import SingleRecipeCard from '../SingleRecipeCard/SingleRecipeCard';
import { Oval } from 'react-loader-spinner';

const Recipes = ({ recipes, chef, loading }) => {

    return (
        <section className='recipes-section py-24 px-5 xl:px-0 bg-[#101418]'>
            <h2 className="section-title text-center mb-16">
                Recipes of {chef.name}
            </h2>
            <div className="my-container recipes-container grid xl:grid-cols-3 gap-8">
                {
                    recipes && recipes.map(recipe => <SingleRecipeCard key={recipe.id} recipe={recipe}></SingleRecipeCard>)
                }
            </div>
            {
                loading ?
                    <div className='w-full mx-auto flex justify-center'>
                        <Oval
                            height={60}
                            width={60}
                            color="#fff"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor="#fff"
                            strokeWidth={4}
                            strokeWidthSecondary={4}

                        />
                    </div>
                    :
                    <>
                    </>
            }
        </section>
    );
};

export default Recipes;