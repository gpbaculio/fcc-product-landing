import React from 'react';
import { InputGroup, Input, InputGroupAddon } from 'reactstrap';

const NewsLetter = () => {
  return (
    <section className='news-letter-container p-5 text-center d-flex flex-column align-items-center'>
      <div className='news-letter-header'>
        <h2 className='font-weight-lighter'>Let's stay in touch</h2>
        <p className='lead'>
          All our content for email marketing pros delivered to your inbox a few
          times a month.
        </p>
      </div>
      <form
        id='form'
        className='subscribe-form'
        action='https://www.freecodecamp.com/email-submit'>
        <InputGroup>
          <Input
            name='email'
            id='email'
            type='email'
            placeholder='Enter your email address'
            required
          />
          <InputGroupAddon addonType='append'>
            <Input
              required
              id='submit'
              type='submit'
              value={'Subscribe'}
              className='subscribe-btn'
            />
          </InputGroupAddon>
        </InputGroup>
      </form>
      <small className='mt-3'>
        We will never share your email address and you can unsubscribe at any
        time.
      </small>
    </section>
  );
};

export default NewsLetter;
