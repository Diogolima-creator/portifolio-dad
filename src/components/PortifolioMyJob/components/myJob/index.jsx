import * as M from './styles'



export const MyJob = ({icon, title, paragraph, subtext}) => {
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
      <M.SubTitleCircle>
        <M.Circle/><M.SubTitle>{subtext}</M.SubTitle>
      </M.SubTitleCircle>
    </M.Container>
  )
}