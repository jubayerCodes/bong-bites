import React, { useRef } from 'react';
import Banner from '../../components/Banner/Banner';
import { useReactToPrint } from 'react-to-print';

const Blog = () => {

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div ref={componentRef}>

            <Banner title="Blog">
                <button onClick={handlePrint} className='btn banner-btn mt-6'>Print This Page</button>

            </Banner>

            <section className="faq-section bg-[#101418] py-28 px-5 xl:px-0">
                <div className="faq-container my-container">
                    <h6 className="mini-title">
                        Blog
                    </h6>
                    <h2 className="section-title mb-10">
                        Frequently Asked Questions
                    </h2>
                    <div className="faq-grp border rounded border-[#C6A87D] p-7 mb-7">
                        <h3 className="question text-white xl:text-3xl text-2xl mb-5">
                            <span className='text-[#C6A87D]'>Question:</span> Tell us the differences between uncontrolled and controlled components.
                        </h3>
                        <p className="answer text-[#ffffffcc]">
                            <span className='text-[#C6A87D]'>Answer:</span> Controlled components are those components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                        </p>
                    </div>
                    <div className="faq-grp border rounded border-[#C6A87D] p-7 mb-7">
                        <h3 className="question text-white xl:text-3xl text-2xl mb-5">
                            <span className='text-[#C6A87D]'>Question:</span> How to validate React props using PropTypes?
                        </h3>
                        <p className="answer text-[#ffffffcc] mb-5">
                            <span className='text-[#C6A87D]'>Answer:</span> The PropTypes utility exports a wide range of validators for configuring type definitions. Below, we’ll list the available validators for basic, renderable, instance, multiple, collection, and required prop types.
                        </p>

                        <h2 className="text-3xl text-white mb-5">
                            Basic types
                        </h2>

                        <p className="answer text-[#ffffffcc] mb-5">
                            Below are the validators for the basic data types:
                        </p>

                        <ul className='text-white list-inside list-disc'>
                            <li className='mb-5'>PropTypes.any: The prop can be of any data type</li>
                            <li className='mb-5'>PropTypes.bool: The prop should be a Boolean</li>
                            <li className='mb-5'>PropTypes.number: The prop should be a number</li>
                            <li className='mb-5'>PropTypes.string: The prop should be a string</li>
                            <li className='mb-5'>PropTypes.func: The prop should be a function</li>
                            <li className='mb-5'>PropTypes.array: The prop should be an array</li>
                            <li className='mb-5'>PropTypes.object: The prop should be an object</li>
                            <li className='mb-5'>PropTypes.symbol: The prop should be a symbol</li>
                        </ul>
                    </div>
                    <div className="faq-grp border rounded border-[#C6A87D] p-7 mb-7">
                        <h3 className="question text-white xl:text-3xl text-2xl mb-5">
                            <span className='text-[#C6A87D]'>Question:</span> Tell us the difference between nodejs and express js.
                        </h3>
                        <p className="answer text-[#ffffffcc]">
                            <span className='text-[#C6A87D]'>Answer:</span> Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript. On the other hand, Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.
                        </p>
                    </div>
                    <div className="faq-grp border rounded border-[#C6A87D] p-7 mb-7">
                        <h3 className="question text-white xl:text-3xl text-2xl mb-5">
                            <span className='text-[#C6A87D]'>Question:</span> What is a custom hook, and why will you create a custom hook?
                        </h3>
                        <p className="answer text-[#ffffffcc]">
                            <span className='text-[#C6A87D]'>Answer:</span> Custom hooks are reusable functions that a React JS developer can use to add special and unique functionality to the React applications.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );

}




export default Blog;