import { Container } from "@mui/material"
import { SignInFormComponent } from "../../components/sign-in"

export const SignInLayout = () => {
  return (
    <Container maxWidth={false} sx={{
      width: "100%",
      height: "100vh",
      background: "white",
      margin: '0px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '45%',
        height: '100%',
      }}>
        <SignInFormComponent/>
      </div>
      <div style={{
        width: '45%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img 
          src={require("../../assets/sign-in.png")}
          alt="sign in background"
          style={{
            height: "600px",
            width: "600px",
          }}
        />
      </div>
    </Container>
  )
}