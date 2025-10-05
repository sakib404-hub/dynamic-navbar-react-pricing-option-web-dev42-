import { CircleCheckBig, CircleCheckBigIcon } from 'lucide-react';
import React from 'react';

const PricingFeature = ({ feature }) => {
    return (
        <div className='flex gap-2'>
            <CircleCheckBigIcon></CircleCheckBigIcon>
            <p>{feature}</p>
        </div>
    );
};

export default PricingFeature;