import React from 'react';
import Wrapper from '../components/Wrapper';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Logos from '../components/Logo/logo';

const HomePage = () => {
  return (
    <Wrapper>
      <header>
         <Navbar />
      </header>
      <main>
          <Header />
          <Logos />
      </main>
     
        <h1>Welcome</h1>
    </Wrapper>
  )
}

export default HomePage