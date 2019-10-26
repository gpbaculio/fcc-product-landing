import React from 'react';
import feature_1 from '../images/feature_1.jpg';
import feature_2 from '../images/feature_2.jpeg';
import feature_3 from '../images/feature_3.jpeg';
const Features = () => {
  return (
    <section className='features-container'>
      <h2>Features</h2>
      <hr />
      <div className='features-info-body'>
        <div className='feature'>
          <h4>Simple and Distinctive Looks</h4>
          <img src={feature_1} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            sagittis est nec quam commodo blandit.
          </p>
        </div>
        <div className='feature'>
          <h4>Elixir Strings</h4>
          <img src={feature_2} />
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
          </p>
        </div>
        <div className='feature'>
          <h4>High Comfort Neck Profile</h4>
          <img src={feature_3} />
          <p>
            Aenean pellentesque libero ut orci volutpat fermentum. Aenean
            interdum nulla nibh, a malesuada purus maximus sed.{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
