import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className='text-right font-weight-light py-3'>
      <div className='container'>
        <ul className='list-unstyled d-flex align-items-end justify-content-end'>
          <li>Privacy</li>
          <li className='mx-3'>Terms</li>
          <li>Contact</li>
        </ul>
        <p className='mb-0'>Copytight 2019, GPB Guitars</p>
      </div>
    </footer>
  );
};

export default Footer;
