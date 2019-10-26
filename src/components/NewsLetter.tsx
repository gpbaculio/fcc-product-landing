import React from 'react';

const NewsLetter = () => {
  return (
    <section className='news-letter-container'>
      <div className='news-letter-header'>
        <h3>Lets's stay in touch</h3>
        <p>
          All our content for email marketing pros delivered to your inbox a few
          times a month.
        </p>
      </div>
      <form>
        <input type='text' placeholder='Your Email Address' />
        <button type='submit'>Subscribe</button>
      </form>
      <p>
        We will never share your email address and you can unsubscribe at any
        time.
      </p>
    </section>
  );
};

export default NewsLetter;
