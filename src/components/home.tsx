import React from 'react';
import Footer from './footer';
import Hero from './hero';
import SimpleSlider from './slider';



function Home() {
  return (
    <div className="Home">
      <Hero />
      <SimpleSlider/>
      <Footer />
    </div>

  );
}

export default Home;
