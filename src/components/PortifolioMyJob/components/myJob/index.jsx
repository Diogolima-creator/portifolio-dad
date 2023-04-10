import * as M from './styles'



export const MyJob = ({icon, title, paragraph}) => {
  return(
    <M.Container>
      <M.Icon>
        {icon}
      </M.Icon>
      <M.Title>
          {title}
      </M.Title>
      <M.Paragraph>
          {paragraph}
      </M.Paragraph>
    </M.Container>
  )
}