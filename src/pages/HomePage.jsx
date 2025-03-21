import React from 'react';
import Wrapper from '../components/Wrapper';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Logos from '../components/Logo/logo';
import Features from '../components/Features/feature';
import Slider from '../components/Slider/Slider';
import DisktopFeature from '../components/DisktopFeature/DisktopFeature';
import Faq from '../components/Faq/Faq';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';
import { Subscribe } from '../components/Susbscribe/Subscribe';

const HomePage = () => {
  return (
    <Wrapper>
      <header>
         <Navbar />
      </header>
      <main>
          <Header />
          <Logos />
          <Features />
          <Slider />
          <DisktopFeature />
          <Testimonials /> 
          <Faq/>
          <Subscribe/>
           
      </main>
      <footer>
          <Footer/>
      </footer>
     
        <h1>Welcome</h1>
    </Wrapper>
  )
}

export default HomePage