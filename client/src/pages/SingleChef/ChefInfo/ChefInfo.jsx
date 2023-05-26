import React from 'react';

const ChefInfo = ({ chef }) => {
    const { picture_url, name, bio, years_experience, num_recipes, likes, id, recipes } = chef
    return (
        <section className='chef-info bg-black py-24 px-5 xl:px-0'>
            <div className="my-container chef-info-container flex flex-col xl:flex-row gap-12 items-center">
                <div className="chef-img">
                    <img src={picture_url} alt="" className='w-full' />
                </div>
                <div className="chef-info-content text-white">
                    <h6 className="mini-title">
                        Professional Chef
                    </h6>
                    <h2 className="section-title mb-6">
                        {name}
                    </h2>
                    <p className="section-desc chef-bio mb-8">
                        {bio}
                    </p>
                    <p className=' mb-4'>
                        Likes: {likes}
                    </p>
                    <p className=' mb-4'>
                        Experience: {years_experience}
                    </p>
                    <p className=' mb-4'>
                        Total Recipes: {recipes && recipes.length}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ChefInfo;