import * as P from './styles'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react'

export const PortifolioContactMe = () => {

    useEffect(() => {
      Aos.init({ duration:2000 })
  },[]);

  return(
    <P.Container data-aos="fade-up" data-aos-once="true" id='contactMe'>
      <P.Body>
        <P.Title>Entre em contato com nossa equipe.</P.Title>
        <P.Button>
          Estou interessado.
        </P.Button>
      </P.Body>
    </P.Container>
  )
}