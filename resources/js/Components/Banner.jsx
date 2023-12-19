import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { banner1, banner2, banner3, banner4, banner5 } from '../assets';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={banner1} alt='banner1' />
      </Carousel.Item>
      <Carousel.Item>
        <img src={banner2} alt='banner2' />
      </Carousel.Item>
      <Carousel.Item>
        <img src={banner3} alt='banner3' />
      </Carousel.Item>
      <Carousel.Item>
        <img src={banner4} alt='banner4' />
      </Carousel.Item>
      <Carousel.Item>
        <img src={banner5} alt='banner5' />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner