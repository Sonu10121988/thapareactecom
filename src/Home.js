import React from 'react';
 import FeatureProduct from './components/FeatureProduct';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';

function Home() {
const data = {
  name: "Dsp Book Store",
};

  return (
    <>
    <HeroSection myData={data}/>
    <FeatureProduct/>
     <Services />
     <Trusted />
     </>
  )
};


export default Home ;
