// SpecialOffers.js
import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import specialOfferImage1 from '/images/Picture1.png'; // Import your special offer images
import specialOfferImage2 from '/images/Picture2.png';
import specialOfferImage3 from '/images/Picture3.png';

const SpecialOffers = () => {
    const [shuffledSlides, setShuffledSlides] = useState([]);

    useEffect(() => {
        $('.special-offers').fadeIn();
        shuffleSlides()
        setInterval(() => {
            $('.special-card').fadeIn(1500);
            $(".special-card").css('transition', 'opacity 1s ease-in-out');
            shuffleSlides();
        }, 2000)
       
    }, []);

    const shuffleSlides = () => {
        const slides = [
            { image: specialOfferImage1, title: 'Spring Clearance Sale', description: 'Save up to 50% on selected items.' },
            { image: specialOfferImage2, title: 'Free Shipping', description: 'Enjoy free shipping on orders over $50.' },
            { image: specialOfferImage3, title: 'Newsletter Discount', description: 'Subscribe and get a 10% discount on your first order.' },
        ];
        const shuffled = slides.sort(() => Math.random() - 0.5);
        setShuffledSlides(shuffled);
    };

    return (
        <div className="mb-2 special-offers" style={{ display: 'none' }}>
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Special Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {shuffledSlides.map((slide, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden special-card">
                        <img src={slide.image} alt={slide.title} className="w-full h-64 object-cover object-center" style={{ scale: '1.1'}} />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{slide.title}</h3>
                            <p className="text-gray-700">{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecialOffers;