import React from 'react';

const Booking = () => {


    const handleSubmit = (e) => {
        e.preventDefault()

        e.target.reset()

    }


    return (
        <section className='booking-section bg-[#101418] py-28 px-5 xl:px-0'>
            <div className="booking-container my-container">
                <h6 className="mini-title text-center">
                    Make A Reserve
                </h6>
                <h2 className="section-title text-center">
                    Book A Table On Time
                </h2>
                <div className="my-container">
                    <form className='w-full flex flex-col' onSubmit={handleSubmit}>
                        <div className="input-grp text-white flex flex-col xl:flex-row items-start w-full mb-8 mt-10">
                            <input required className='input-field mb-8 xl:mb-0 xl:mr-4' type="text" name="name" id="name-field" placeholder='Your name' />

                            <input required className='input-field xl:ml-4' type="text" name="phone" id="phone-field" placeholder='Your Phone' />
                        </div>

                        <div className="input-grp text-white flex flex-col xl:flex-row items-start">
                            <input required className='input-field mb-8 xl:mb-0 mr-4' type="number" name="persons" id="persons-field" placeholder='Persons' />

                            <input required className='input-field mb-8 xl:mb-0 xl:mx-4' type="date" name="date" id="date-field" placeholder='dd-mm-yy' />

                            <input required className='input-field xl:ml-4' type="text" name="time" id="time-field" placeholder='Time' />
                        </div>

                        <button type='submit' className="btn banner-btn mt-8 mx-auto w-full xl:w-fit">Book A Table</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Booking;