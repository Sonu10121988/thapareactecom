import React  from 'react'
import HeroSection from './components/HeroSection';
import {useProductContext} from './context/ProductContext';


function About() {
  const {myName} = useProductContext();
  const data = {
    name: "Book Store",
  };
  return (
    <>
    {myName}
   <HeroSection myData={data}/>
   </>
  )
};

export default About ;
