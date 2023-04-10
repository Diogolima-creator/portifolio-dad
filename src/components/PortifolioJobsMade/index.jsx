import * as P from './styles'
import { CardJobMade } from "./components/cardJobMade";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const PortifolioJobsMade = () => {

  useEffect(() => {
    Aos.init({ duration:1000 })
},[]);

  const cardJob = [{ img: '../../../public/sobreOne.jpeg', text: 'lormep isum.'},
  { img: '../../../public/sobreOne.jpeg', text: 'lormep isum.'},
  { img: '../../../public/sobreOne.jpeg', text: 'lormep isum.'},
  { img: '../../../public/sobreOne.jpeg', text: 'lormep isum.'},
  { img: '../../../public/sobreOne.jpeg', text: 'lormep isum.'},
  { img: '../../../public/sobreOne.jpeg', text: 'lormep isum.'},
  { img: '../../../public/sobreOne.jpeg', text: 'lormep isum.'},
  { img: '../../../public/sobreOne.jpeg', text: 'lormep isum.'}]
  return(

    <P.Container data-aos="fade-up" data-aos-once="true" id='jobsMade'>
      <P.Header>
          <h1>Realizados</h1>
      </P.Header>
          <P.Title>Trabalhos Realizados</P.Title>
      <P.Body>
        <Swiper
          modules={[ Pagination, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={80}
          pagination
          slidesPerView={3}
          loop={true}
          >
          { cardJob.map(( card ) => (
              <SwiperSlide><CardJobMade img={card.img} text={card.text} /></SwiperSlide>
            ))}
        </Swiper>
      </P.Body>
    </P.Container>
  )
}