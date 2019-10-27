import React from 'react';
import feature_1 from '../images/feature_1.jpg';
import feature_2 from '../images/feature_2.jpeg';
import feature_3 from '../images/feature_3.jpeg';
const Features = () => {
  return (
    <section className='features-container'>
      <div className='heading-container'>
        <h4>Features</h4>
      </div>
      <div className='features-info-body'>
        <div className='feature'>
          <h3>Simple and Distinctive Looks</h3>
          <img src={feature_1} />
          <p className='mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            sagittis est nec quam commodo blandit.
          </p>
        </div>
        <div className='feature'>
          <h3>Elixir Strings</h3>
          <img src={feature_2} />
          <p className='mt-3'>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
          </p>
        </div>
        <div className='feature'>
          <h3>High Comfort Neck Profile</h3>
          <img src={feature_3} />
          <p className='mt-3'>
            Aenean pellentesque libero ut orci volutpat fermentum. Aenean
            interdum nulla nibh, a malesuada purus maximus sed.{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
