import React from 'react';
import Header from './components/Header';
import NewsLetter from './components/NewsLetter';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';

const App: React.FC = () => (
  <>
    <Header />
    <div className='container'>
      <Features />
      <HowItWorks />
      <NewsLetter />
    </div>
  </>
);

export default App;
