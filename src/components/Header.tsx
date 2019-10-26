import React from 'react';
import { GiGuitar } from 'react-icons/gi';

const Header = () => {
  return (
    <header id='header'>
      <div className='container'>
        <div className='logo-container'>
          <GiGuitar className='logo' />
          <h2>G guitars</h2>
        </div>
        <nav>
          <ul>
            <li>Features</li>
            <li>How it works</li>
            <li>Pricing</li>
            <li>Subscribe</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
