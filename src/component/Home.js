import React from 'react';
import Slider from './home_comp/Slider';
import Feature from './home_comp/Feature';
import AboutFour from './home_comp/AboutFour';
import DonationThree from './home_comp/DonationThree';
import TestiMonialsThree from './home_comp/TestiMonialsThree';
import BenefitOne from './home_comp/BenefitOne';
import Feature2 from './home_comp/Feature2';
function Home() {
  return (
    <>
      <Slider/>
      <Feature/>
      <AboutFour/>
      <DonationThree/>
      <TestiMonialsThree/>
      <BenefitOne/>
      <Feature2/>
      <div align="center">
      This is a home page
      </div>
    </>
  )
}

export default Home
