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

  const cardJob = [{ img: 'https://user-images.githubusercontent.com/62246037/230955372-bf484e8e-7b9c-4c3c-adfe-dc85bca40b74.jpeg', text: 'lormep isum.'},
  { img: 'https://user-images.githubusercontent.com/62246037/230955372-bf484e8e-7b9c-4c3c-adfe-dc85bca40b74.jpeg', text: 'lormep isum.'},
  { img: 'https://user-images.githubusercontent.com/62246037/230955372-bf484e8e-7b9c-4c3c-adfe-dc85bca40b74.jpeg', text: 'lormep isum.'},
  { img: 'https://user-images.githubusercontent.com/62246037/230955372-bf484e8e-7b9c-4c3c-adfe-dc85bca40b74.jpeg', text: 'lormep isum.'},
  { img: 'https://user-images.githubusercontent.com/62246037/230955372-bf484e8e-7b9c-4c3c-adfe-dc85bca40b74.jpeg', text: 'lormep isum.'},
  { img: 'https://user-images.githubusercontent.com/62246037/230955372-bf484e8e-7b9c-4c3c-adfe-dc85bca40b74.jpeg', text: 'lormep isum.'},
  { img: 'https://user-images.githubusercontent.com/62246037/230955372-bf484e8e-7b9c-4c3c-adfe-dc85bca40b74.jpeg', text: 'lormep isum.'},
  { img: 'https://user-images.githubusercontent.com/62246037/230955372-bf484e8e-7b9c-4c3c-adfe-dc85bca40b74.jpeg', text: 'lormep isum.'}]
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
          breakpoints={{
            0:{
              items:1
            },
            1200:{
                items:2
            },
            1600:{
                items:3
            }
          }}
          >
          { cardJob.map(( card ) => (
              <SwiperSlide><CardJobMade img={card.img} text={card.text} /></SwiperSlide>
            ))}
        </Swiper>
      </P.Body>
    </P.Container>
  )
}