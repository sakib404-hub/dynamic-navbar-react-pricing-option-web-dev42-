import React, { Suspense } from 'react';
import Header from './Component/Header/Header';
import CustomHeader from './Component/CustomHeader/CustomHeader';
import PricingContainer from './Component/PricingContainer/PricingContainer';
import Loader from './Component/Loader/Loader';
import ResultChart from './Component/ResultChart/ResultChart';
import axios from 'axios';
import MarksChart from './Component/MarksChart/MarksChart';

// fetching the card information 
const fetchPromise = async () => {
  const res = await fetch('../public/pricing.json')
  return res.json();
}
//fteching the promise by calling the function
const fetchPricingoptions = fetchPromise();

const url = '../public/marks.json'
const marksPromise = axios.get(url);


const App = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <CustomHeader></CustomHeader>
      <Suspense fallback={<Loader></Loader>}>
        <PricingContainer
          fetchPricingoptions={fetchPricingoptions}></PricingContainer>
      </Suspense>
      <div className='flex items-center justify-center p-4'>
        <ResultChart></ResultChart>
      </div>
      <div>
        <MarksChart marksPromise={marksPromise}></MarksChart>
      </div>
    </div>
  );
};

export default App;