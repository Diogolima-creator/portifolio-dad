import * as P from './styles'

export const PortifolioPhrase = () => {
  const phrase = "Não é possível chegar a lugar algum se você não sabe exatamente onde está e aonde quer chegar."
  return(
    <P.Container>
      <P.Title>{`"${phrase.toUpperCase()}"`}</P.Title>
      <P.Title>DUDA MENDONÇA</P.Title>
    </P.Container>
  )
}