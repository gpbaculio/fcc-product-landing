import React from 'react';
import Header from './components/Header';
import NewsLetter from './components/NewsLetter';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';

const App: React.FC = () => (
  <>
    <Header />
    <div className='container'>
      <Features />
      <HowItWorks />
      <Pricing />
      <NewsLetter />
    </div>
  </>
);

export default App;
