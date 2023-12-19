import { banner1, banner2, banner3, banner4, banner5 } from '../assets';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Fade = () => {
  AOS.init();

  return (
    <div>
      <img src={banner1} alt='banner1' data-aos="fade-up" data-aos-duration='3000' data-aos-delay='250' className='p-9' />
      <img src={banner2} alt='banner2' data-aos="fade-up" data-aos-duration='3000' data-aos-delay='250' className='p-9' />
      <img src={banner3} alt='banner3' data-aos="fade-up" data-aos-duration='3000' data-aos-delay='250' className='p-9' />
      <img src={banner4} alt='banner4' data-aos="fade-up" data-aos-duration='3000' data-aos-delay='250' className='p-9' />
      <img src={banner5} alt='banner5' data-aos="fade-up" data-aos-duration='3000' data-aos-delay='250' className='p-9' />
    </div>
  )
}

export default Fade