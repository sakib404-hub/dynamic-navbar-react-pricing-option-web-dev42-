import { use } from "react";


const PricingContainer = ({ fetchPricingoptions }) => {
    const fetchOptions = use(fetchPricingoptions);
    console.log(fetchOptions)
    return (
        <div>
            This is the pricing options
        </div>
    );
};

export default PricingContainer;