import React, { useEffect } from 'react';
import $ from 'jquery';

const NewsletterSignup = () => {
    useEffect(() => {
        // Animation using jQuery
        $('.newsletter-form').hide().fadeIn(1000);
    }, []);

    return (
        <>
        <div className="relative">
            <div className="w-full pt-20 text-black bg-gray-100 px-4">
                <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2 my-4">
                        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                            Get Exclusive Offers & Updates
                        </h1>
                        <p>Subscribe to our newsletter and be the first to know about new arrivals, sales, and more!</p>
                    </div>
                    <div className="my-4 newsletter-form">
                        <form className="flex flex-col sm:flex-row items-center justify-between w-full">
                            <input
                                className="p-3 flex-grow rounded-md text-black bg-white border border-gray-300 focus:outline-none focus:border-blue-500"
                                type="email"
                                placeholder="Enter Email"
                                
                            />
                            <button className="bg-blue-500 text-white rounded-md font-medium w-full sm:w-auto ml-0 sm:ml-4 my-4 sm:my-0 px-6 py-3">
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-2 text-gray-600 text-sm">
                            We care about the protection of your data. Read our{' '}
                            <span className="text-blue-500">Privacy Policy.</span>
                        </p>
                    </div>
                </div>
            </div>
            {/* SVG as absolute positioned */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute left-0 w-full fill-current text-gray-100">
                <path fillOpacity="1" d="M0,192L48,208C96,224,192,256,288,250.7C384,245,480,203,576,160C672,117,768,75,864,101.3C960,128,1056,224,1152,234.7C1248,245,1344,171,1392,133.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </div>
        <div className=' h-20 sm:h-44 md:h-56 lg:h-64 xl:h-72 2xl:h-96 bg-gray-800'></div>
        </>
    );
};

export default NewsletterSignup;
