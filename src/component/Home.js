import React from 'react';
import Slider from './home_comp/Slider';
import Feature from './home_comp/Feature';
import About_four from './home_comp/About_four';
import Donation_three from './home_comp/Donation_three';
import Donation_three_2 from './home_comp/Donation_three_2';

function Home() {
  return (
    <>
      <Slider/>
      <Feature/>
      <About_four/>
      <Donation_three/>
      <Donation_three_2/>
      <div>
      This is a home page
      </div>
    </>
  )
}

export default Home
