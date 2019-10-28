import React from 'react';

const HowItWorks = () => {
  return (
    <section id='how-it-works' className='how-container'>
      <div className='heading-container'>
        <h4>How It Works</h4>
      </div>
      <div className='how-body'>
        <div className='demo-container'>
          <iframe
            title='how-it-works-video'
            id='video'
            width='100%'
            height='100%'
            src='https://www.youtube-nocookie.com/embed/cWtIZKm_xf8?rel=0&amp;controls=0&amp;showinfo=0'
            frameBorder='0'
            allowFullScreen
          />
        </div>
        <div className='how-info'>
          <h3>The Next Level Guitar</h3>
          <div className='how-info-body'>
            <p>
              Etiam ultricies odio ante, nec aliquam ante pellentesque nec. Sed
              dignissim in risus quis condimentum. Pellentesque viverra libero
              quis libero facilisis efficitur.
            </p>
            <p>
              Donec ac neque id neque luctus porta. Ut vestibulum ante ut odio
              lobortis, in finibus tellus gravida. Nam dapibus ex at lectus
              aliquam scelerisque. Nulla ante tortor, iaculis eget massa ac,
              maximus vulputate dui. Phasellus in faucibus nulla.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
