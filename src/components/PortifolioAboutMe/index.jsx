import * as P from './styles'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react'

export const PortifolioAboutMe = () => {

 useEffect(() => {
        Aos.init({ duration:2000 })
    },[]);
    
  return(
    <P.Container data-aos="fade-up" data-aos-once="true" id="aboutMe">
        <P.Header>
          <h1>SOBRE</h1>
        </P.Header>
      <P.AboutMe>
         <P.AboutMeTexts>
              <P.AboutMeTitle>
              Quem sou eu
              </P.AboutMeTitle>
              <P.AboutMeParagraph>
              {'Com 32 anos de experiência na atuação política de Mato Grosso do Sul, meu trabalho faz presente em dezenas de candidaturas vencedoras que auxiliam na construção política de todo o estado. Realizo coordenação política estratégica de campanha e presto consultoria para candidaturas e mandatos de Vereadores, Prefeitos, Deputados Estaduais, Deputados Federais, Senadores e Governadores.'}
              </P.AboutMeParagraph>
         </P.AboutMeTexts>
         <P.AboutMeImg>

         </P.AboutMeImg>
      </P.AboutMe>
    </P.Container>
  )
}