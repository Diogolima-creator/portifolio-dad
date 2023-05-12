import * as P from './styles'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react'


export const PortifolioHeader = () => {

  useEffect(() => {
    Aos.init({ duration:1000 })
},[]);


  return(
    <P.Container id='header'>
      <P.Header>
        <P.Title data-aos="fade-right" data-aos-once="true">
          <img src='https://user-images.githubusercontent.com/62246037/230955406-b8f5d8d5-01d6-4303-898b-62c0930619a8.png'></img>
        </P.Title>
        <P.Menu data-aos="fade-left" data-aos-once="true">
            <P.MenuItem href="#aboutMe">Sobre mim</P.MenuItem>
            <P.MenuItem href="#myJob">Meu trabalho</P.MenuItem>
            <P.MenuItem href="#jobsMade">Trabalhos feito</P.MenuItem>
            <P.MenuItem href="#contactMe">Meu Contato</P.MenuItem>
            <P.MenuItem href="#footer">Sociais</P.MenuItem>
        </P.Menu>
      </P.Header>
      <P.Body>
        <P.BodyTexts data-aos="fade-up" data-aos-once="true">
            <P.BodySubTitle>Olá, sou <span>Gilvan Lima</span></P.BodySubTitle>
            <P.BodyTitle><span>Coordenador & consultor </span></P.BodyTitle>
            <P.BodyTitle>de Política estratégica</P.BodyTitle>
        </P.BodyTexts>
      </P.Body>
    </P.Container>
  )
}