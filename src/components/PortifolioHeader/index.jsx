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
          <img src='../../../../public/logo-diretriz-preta.png'></img>
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
        <P.BodyTexts>
            <P.BodySubTitle>Olá, sou Gilvan Lima </P.BodySubTitle>
            <P.BodyTitle>Consultor e especialista em marketing político</P.BodyTitle>
        </P.BodyTexts>
      </P.Body>
    </P.Container>
  )
}