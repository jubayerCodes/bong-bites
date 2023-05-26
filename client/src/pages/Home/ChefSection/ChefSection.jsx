import React, { useEffect, useState } from 'react';
import Chefs from '../Chefs/Chefs';

const ChefSection = () => {


    return (
        <div className='chefs-container bg-black px-5 xl:px-0'>
            <div className="my-container chefs-container-content">
                <h6 className="mini-title text-center">
                    Team Of Restaurant
                </h6>
                <h2 className="section-title text-center">
                    Meet Our Professionals
                </h2>
                <Chefs></Chefs>
            </div>
        </div>
    );
};

export default ChefSection;