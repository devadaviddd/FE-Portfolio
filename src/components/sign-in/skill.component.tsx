import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles"

type Props = {
  name: string
}

const SkillStyle = styled('div')({
  borderRadius: '28px',
  border: '1px solid #000',
  textAlign: 'center',
  minWidth: '6rem',
  height: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0px'
});


export const Skill = (props: Props) => {
  return (
    <SkillStyle>
      <Typography variant="subtitle2"
        fontSize={"1rem"}>
        {props.name}
      </Typography>
    </SkillStyle>
  )
}