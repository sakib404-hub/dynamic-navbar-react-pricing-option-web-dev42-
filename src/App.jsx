import React, { Suspense } from 'react';
import Header from './Component/Header/Header';
import CustomHeader from './Component/CustomHeader/CustomHeader';
import PricingContainer from './Component/PricingContainer/PricingContainer';
import Loader from './Component/Loader/Loader';
const fetchPromise = async () => {
  const res = await fetch('../public/pricing.json')
  return res.json();
}
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
    </div>
  );
};

export default App;