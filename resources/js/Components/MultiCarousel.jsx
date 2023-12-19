import { 
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
  carousel7,
  carousel8,
  carousel9
} from '../assets';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MultiCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3
    }
  };

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      containerClass="container-with-dots"
      draggable
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      slidesToSlide={1}
      swipeable
    >
      <img src={carousel1} alt='carousel1' className='px-3' />
      <img src={carousel2} alt='carousel2' className='px-3' />
      <img src={carousel3} alt='carousel3' className='px-3' />
      <img src={carousel4} alt='carousel4' className='px-3' />
      <img src={carousel5} alt='carousel5' className='px-3' />
      <img src={carousel6} alt='carousel6' className='px-3' />
      <img src={carousel7} alt='carousel7' className='px-3' />
      <img src={carousel8} alt='carousel8' className='px-3' />
      <img src={carousel9} alt='carousel9' className='px-3' />
    </Carousel>
  )
}

export default MultiCarousel