import * as C from './styles'

export const CardJobMade = ({img, text}) => {
  return(
    <C.Container>
      <C.Img src={img}>

      </C.Img>
      <C.Text>
        {text}
      </C.Text>
    </C.Container>
  )
}