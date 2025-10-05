import React, { Suspense } from 'react';
import Header from './Component/Header/Header';
import CustomHeader from './Component/CustomHeader/CustomHeader';
import PricingContainer from './Component/PricingContainer/PricingContainer';
import Loader from './Component/Loader/Loader';
import ResultChart from './Component/ResultChart/ResultChart';

// fetching the card information 
const fetchPromise = async () => {
  const res = await fetch('../public/pricing.json')
  return res.json();
}
//fteching the promise by calling the function
const fetchPricingoptions = fetchPromise();


const App = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <CustomHeader></CustomHeader>
      <Suspense fallback={<Loader></Loader>}>
        <PricingContainer
          fetchPricingoptions={fetchPricingoptions}></PricingContainer>
      </Suspense>
      <ResultChart></ResultChart>
    </div>
  );
};

export default App;