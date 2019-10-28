import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import product_1 from '../images/product_1.jpeg';
import product_2 from '../images/product_2.jpeg';
import product_3 from '../images/product_3.jpeg';
import product_4 from '../images/product_4.jpeg';
import product_5 from '../images/product_5.jpeg';
import product_6 from '../images/product_6.jpeg';
import product_7 from '../images/product_7.jpeg';
import product_8 from '../images/product_8.jpeg';
import product_9 from '../images/product_9.jpeg';
import { Row, Col } from 'reactstrap';
import uuidv1 from 'uuid/v1';
const items = [
  [
    {
      src: product_1,
      name: 'GPB-1 Guitar 1',
      msrp: '$1,100.00',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      src: product_2,
      name: 'GPB-1 Guitar 2',
      msrp: '$1,200.00',
      desc:
        'Curabitur fringilla turpis feugiat magna tempus, vitae congue arcu mattis.'
    },
    {
      src: product_3,
      name: 'GPB-1 Guitar 3',
      msrp: '$1,300.00',
      desc: 'Vestibulum fermentum consequat lectus in suscipit.'
    }
  ],
  [
    {
      src: product_4,
      name: 'GPB-2 Guitar 4',
      msrp: '$2,100.00',
      desc:
        'Donec dapibus maximus vulputate. Mauris bibendum neque enim, id pulvinar dui aliquam maximus.'
    },
    {
      src: product_5,
      name: 'GPB-2 Guitar 5',
      msrp: '$2,200.00',
      desc:
        'In aliquet nibh nec augue malesuada luctus. Phasellus urna urna, vulputate laoreet massa nec, auctor imperdiet felis.'
    },
    {
      src: product_6,
      name: 'GPB-2 Guitar 6',
      msrp: '$2,300.00',
      desc: 'Cras mollis ultricies ex. In mattis laoreet tortor et auctor. '
    }
  ],
  [
    {
      src: product_7,
      name: 'GPB-3 Guitar 7',
      msrp: '$3,200.00',
      desc:
        'In sit amet libero a turpis placerat fermentum. Suspendisse at dolor nec lectus tincidunt volutpat nec ut est.'
    },
    {
      src: product_8,
      name: 'GPB-3 Guitar 8',
      msrp: '$3,300.00',
      desc:
        'Nulla nec commodo sem, id tincidunt est. Duis id orci magna. Duis in blandit urna.'
    },
    {
      src: product_9,
      name: 'GPB-3 Guitar 9',
      msrp: '$3,400.00',
      desc:
        'Vivamus eleifend eu felis ut mattis. Aliquam mattis quam ex, eget tincidunt metus condimentum quis.'
    }
  ]
];
const PricingProductSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((prod, i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        in={true}
        key={uuidv1()}>
        <div className='carousel-container'>
          <Row>
            {prod.map(item => (
              <Col key={item.src} md='4' className='product-column'>
                <div className='product-item'>
                  <h3>{item.name}</h3>
                  <img className='my-2' width='100%' src={item.src} />
                  <p className='lead'>{item.msrp}</p>
                  <small>{item.desc}</small>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items[activeIndex]}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction='prev'
        directionText='Previous'
        onClickHandler={previous}
      />
      <CarouselControl
        direction='next'
        directionText='Next'
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default PricingProductSlider;
