import React, { useEffect, useState } from 'react';
import SingleChefCard from '../SingleChefCard/SingleChefCard';
import { Oval, Puff, ThreeDots } from 'react-loader-spinner';

const Chefs = () => {
    const [chefs, setChefs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://server-sepia-nu.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))

        setLoading(false)
    }, [])

    return (
        <>
            <div className='chefs-cards mt-8'>
                {
                    chefs && chefs.map(c => <SingleChefCard key={c.id} chef={c}></SingleChefCard>)
                }
            </div>
            {
                loading && <div className='w-full mx-auto flex justify-center'>
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
            }
        </>
    );
};

export default Chefs;