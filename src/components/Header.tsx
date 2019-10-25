import React from 'react';
import { GiGuitar } from 'react-icons/gi';

const Header = () => {
  return (
    <header id='header'>
      <div className='logo-container'>
        <GiGuitar className='logo' />
        <h2>G guitars</h2>
      </div>
      <nav>
        <ul>
          <li>Features</li>
          <li>How it works</li>
          <li>Pricing</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
