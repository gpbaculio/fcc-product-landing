import React from 'react';
import { GiGuitar } from 'react-icons/gi';

const Header = () => {
  return (
    <header id='header'>
      <div className='container'>
        <div className='logo-container'>
          <GiGuitar className='logo' />
          <div className='logo-text'>GPB Guitars</div>
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
