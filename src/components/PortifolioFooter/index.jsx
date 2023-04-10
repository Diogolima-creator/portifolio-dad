import * as P from './styles'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react'

export const PortifolioFooter = () => {

  useEffect(() => {
    Aos.init({ duration:2000 })
},[]);

  const socials = [
    { icon:<FacebookIcon sx={{ width:'80%', height:'80%'}}/>},
    { icon:<InstagramIcon sx={{ width:'80%', height:'80%'}}/>},
    { icon:<WhatsAppIcon sx={{ width:'80%', height:'80%'}}/>},
    { icon:<EmailIcon sx={{ width:'80%', height:'80%'}}/>},
  ]

  return(
    <P.Container data-aos="fade-up" data-aos-once="true" id='footer'>
      <P.Socials>
        {socials.map((social) => (
          <a>{social.icon}</a>
        ))}
      </P.Socials>
      <p>© 2023 diretriz marketing & consultoria. Todos os direitos reservados.</p>
      <a href='#header'><ArrowUpwardIcon className='icon' sx={{ position:'fixed', bottom:'1%', height:20, width:20, border:'1px solid', borderRadius:15, right:'2%'}}/></a>
    </P.Container>
  )
}