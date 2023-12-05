import React from 'react';
import MainLay from '../Components/MainLay';
import Hero from "../Pages/Hero";
import Article from './Article';



function HomePage() {
  return (

  <MainLay>
    <Hero/>
   <Article/>
  </MainLay>
  )
}

export default HomePage