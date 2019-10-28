import React from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';

const NewsLetter = () => {
  return (
    <section className='news-letter-container mt-5 p-5 text-center d-flex flex-column align-items-center'>
      <div className='news-letter-header'>
        <h2 className='font-weight-lighter'>Let's stay in touch</h2>
        <p className='lead'>
          All our content for email marketing pros delivered to your inbox a few
          times a month.
        </p>
      </div>
      <form className='subscribe-form'>
        <InputGroup>
          <Input placeholder='Your Email Address' />
          <InputGroupAddon addonType='append'>
            <Button type='submit' className='subscribe-btn'>
              Subscribe
            </Button>
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
