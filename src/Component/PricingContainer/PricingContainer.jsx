import { use } from "react";
import PricingCard from "../PricingCard/PricingCard";


const PricingContainer = ({ fetchPricingoptions }) => {
    const fetchOptions = use(fetchPricingoptions);
    // console.log(fetchOptions)
    return (
        <div>
            <h2 className="text-3xl font-semibold mt-10 text-center">Get Out Membership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
                {
                    fetchOptions.map((option) => {
                        return <PricingCard
                            option={option}
                            key={option.id}></PricingCard>
                    })
                }
            </div>
        </div>
    );
};

export default PricingContainer;