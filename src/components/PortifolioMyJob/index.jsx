import { MyJob } from './components/myJob'
import * as P from './styles'
import { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import WorkIcon from '@mui/icons-material/Work';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CampaignIcon from '@mui/icons-material/Campaign';
import Groups2Icon from '@mui/icons-material/Groups2';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DevicesIcon from '@mui/icons-material/Devices';


export const PortifolioMyJob = () => {

  useEffect(() => {
    Aos.init({ duration:1000 })
},[]);

  const cards = [{ 
    iconUrl:<WorkIcon sx={{ width: '100%', height:'100%'}}/>,
    title: 'Estratégia de campanha', 
    text:'Meu trabalho começa com o desenvolvimento e a implementação de uma estratégia de campanha eficaz para o candidato ou partido político, que inclui definir os objetivos, definir as mensagens-chave, identificar o público-alvo e determinar as táticas de comunicação. '},
  { 
    iconUrl:<QueryStatsIcon sx={{ width: '100%', height:'100%'}}/>,
    title: 'Pesquisa eleitoral', 
    text:'Através dos dados de pesquisas qualitativa e quantitativa é possível entender o comportamento do eleitorado e identificar tendências e oportunidades para a campanha. '},
  { 
    iconUrl:<DevicesIcon sx={{ width: '100%', height:'100%'}}/>,
    title: 'Gerenciamento de mídias', 
    text:'Realiza-se a gestão das mídias tradicionais e digitais do candidato ou partido político, criando conteúdo e respondendo a comentários, além de aumentar a base de seguidores e ampliar o alcance das mensagens. Também estabelece boas relações com a imprensa, fornecendo informações e organizando eventos.'},
  { 
    iconUrl:<CampaignIcon sx={{ width: '100%', height:'100%'}}/>,
    title: 'Comunicação', 
    text:'Desenvolvimento de mensagens-chave da campanha e criação dos materiais necessários, como folhetos, anúncios de TV e rádio, spots de rádio e outras peças de comunicação. '},
  { 
    iconUrl:<Groups2Icon sx={{ width: '100%', height:'100%'}}/>,
    title: 'Eventos de campanha', 
    text:'Organização dos eventos de campanha, como comícios, debates, reuniões e visitas com eleitores e outros eventos públicos. '},
  { 
    iconUrl:<Diversity3Icon sx={{ width: '100%', height:'100%'}}/>,
    title: 'Coordenação de campanha', 
    text:'Coordenação da equipe de campanha, fornecendo treinamento, atribuindo tarefas e supervisionando as atividades. '},
  { 
    iconUrl:<GroupAddIcon sx={{ width: '100%', height:'100%'}}/>, 
    title: 'Apoio político',
    text:'Articulação política para angariar de forma quantitativa e qualitativa lideranças que possam contribuir com o grupo de campanha, construção de chapa e arrecadação de fundos.'}
  ]
  
  return(
    <P.Container data-aos="fade-up" data-aos-once="true" id="myJob">
      <P.Header>
          <h1>Trabalhos</h1>
      </P.Header>
      <P.SubHeader>
       <P.SubHeaderTitle>
        Metodologia de Trabalho 
      </P.SubHeaderTitle>
      </P.SubHeader>
      <P.Body>
        {cards.map((card) => (
          <MyJob  icon={card.iconUrl} title={card.title} paragraph={card.text}/>
        ))}
      </P.Body>
    </P.Container>
  )
}