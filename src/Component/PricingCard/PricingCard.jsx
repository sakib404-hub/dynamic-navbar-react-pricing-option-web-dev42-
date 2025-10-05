import React from 'react';
import PricingFeature from '../PricingFeatures/PricingFeature';

const PricingCard = ({ option }) => {
    // console.log(option)
    const { plan, price, description, features } = option;
    return (
        <div className='border bg-gray-700 p-4 rounded-2xl flex flex-col'>
            {/* card Header  */}
            <div>
                <h1 className='text-5xl'>{plan}</h1>
                <p className='text-2xl'>{price}</p>
            </div>
            {/* card body  */}
            <div className='bg-gray-600 p-4 rounded-2xl mt-5 flex-1'>
                <p>{description}</p>
                <div className='space-y-3 mt-5'>
                    {
                        features.map((feature, index) => {
                            return <PricingFeature
                                feature={feature}
                                key={index}></PricingFeature>
                        })
                    }
                </div>
            </div>
            {/* button  */}
            <button className='w-full border mt-5 rounded-full p-2 font-semibold bg-gray-600 duration-300 hover:bg-gray-400'>
                Subscribe
            </button>
        </div>
    );
};

export default PricingCard;