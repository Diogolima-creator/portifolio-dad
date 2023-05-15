import { MyJob } from './components/myJob'
import * as P from './styles'
import { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CampaignIcon from '@mui/icons-material/Campaign';
import Groups2Icon from '@mui/icons-material/Groups2';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import GroupAddIcon from '@mui/icons-material/GroupAdd';


export const PortifolioMyJob = () => {

  useEffect(() => {
    Aos.init({ duration:1000 })
},[]);

  const cards = [{ 
    iconUrl:<WorkOutlineIcon sx={{ width: '100%', height:'100%'}}/>,
    title: 'Estratégia de campanha', 
    text:'Meu trabalho começa com a captação de informações que envolvem o candidato ou partido político. Com as informações em mãos, o próximo passo é o desenvolvimento e a implementação de uma estratégia de campanha eficaz, que inclui definir o planejamento de trabalho, assim como os objetivos a serem alcançados, identificar o público-alvo e determinar as táticas de comunicação.',
    subtext:'É papel do coordenador entender o cenário político para elaborar um plano de ações eficiente.'
  },
  { 
    iconUrl:<QueryStatsIcon sx={{ width: '100%', height:'100%'}}/>,
    title: 'Pesquisa eleitoral', 
    text:'Através dos dados de pesquisas qualitativa e quantitativa é possível entender o comportamento do eleitorado, identificar tendências e oportunidades para a campanha, definir a estratégia de comunicação e subsidiar as criações publicitárias. Elas são ferramentas essenciais para a definição de temas, propostas, imagem e discurso dos candidatos e candidatas.',
    subtext:'Uma campanha eleitoral vitoriosa depende de uma estratégia de comunicação bem elaborada que considere as expectativas, desejos e demandas dos eleitores e eleitoras.'
  },
  { 
    iconUrl:<CampaignIcon sx={{ width: '100%', height:'100%'}}/>,
    title: 'Comunicação', 
    text:'É realizado o gerenciamento nas mídias tradicionais e digitais do candidato ou partido político, criando conteúdo, monitorando e respondendo a comentários, aumentando a base de seguidores e ampliando o alcance das mensagens. Desenvolvimento do slogan da campanha e criação dos materiais necessários, como folhetos, anúncios de TV e rádio, spots de rádio e outras peças de comunicação. Além de ajudar a estabelecer e manter boas relações com a imprensa, fornecendo informações e materiais de mídia e agendando entrevistas.',
    subtext:'O Planejamento de Comunicação é fundamental para o candidato(a) conectar-se com as pessoas de forma assertiva, natural e impactante.'
  },
  { 
    iconUrl:<Groups2Icon sx={{ width: '100%', height:'100%'}}/>,
    title: 'Eventos de campanha', 
    text:'Organização dos eventos de campanha, como comícios, debates, reuniões e visitas com eleitores e outros eventos públicos.',
    subtext:'Estar em contato com as pessoas é essencial para a construção da base eleitoral do candidato ou candidata.'
  },
  { 
    iconUrl:<Diversity3Icon sx={{ width: '100%', height:'100%'}}/>,
    title: 'Equipe de campanha', 
    text:'Coordenação da equipe de campanha, fornecendo treinamento, atribuindo tarefas e supervisionando as atividades.',
    subtext:'Ninguém ganha uma eleição sozinho, ter uma equipe qualificada é peça-chave para alcançar os objetivos e metas da campanha.'
  },
  { 
    iconUrl:<GroupAddIcon sx={{ width: '100%', height:'100%'}}/>, 
    title: 'Apoio político',
    text:'Articulação política para angariar de forma quantitativa e qualitativa lideranças que possam contribuir com o grupo de campanha, construção de chapa e arrecadação de fundos.',
    subtext:'O grupo político permite alcançar e expandir a campanha em setores e áreas da sociedade para além do candidato.'
  }
  ]
  
  return(
    <P.Container data-aos="fade-up" data-aos-once="true" id="myJob">
      <P.Header>
          <h1>TRABALHOS</h1>
      </P.Header>
      <P.SubHeader>
       <P.SubHeaderTitle>
        MEU <span>TRABALHO</span>
      </P.SubHeaderTitle>
      </P.SubHeader>
      <P.Body>
        {cards.map((card) => (
          <MyJob icon={card.iconUrl} title={card.title} paragraph={card.text} subtext={card.subtext}/>
        ))}
      </P.Body>
    </P.Container>
  )
}