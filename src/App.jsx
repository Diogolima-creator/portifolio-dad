import { PortifolioAboutMe, PortifolioHeader, PortifolioMyJob, PortifolioContactMe, 
  PortifolioJobsMade, PortifolioFooter, PortifolioPhrase} from "./components";


function App() {
  return (
    <>
      <PortifolioHeader />
      <PortifolioAboutMe />
      <PortifolioMyJob />
      <PortifolioPhrase />
      <PortifolioJobsMade />
      <PortifolioFooter />  
    </>
  )
}

export default App
