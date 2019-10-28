import React from 'react';
import Header from './components/Header';
import NewsLetter from './components/NewsLetter';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => (
  <>
    <Header />
    <div className='container'>
      <NewsLetter />
      <Features />
      <HowItWorks />
      <Pricing />
    </div>
    <Footer />
  </>
);

export default App;
