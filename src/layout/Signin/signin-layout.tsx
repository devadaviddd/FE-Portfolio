import { SignInFormComponent } from "../../components/sign-in"
import { ResponsiveSignInLayout } from "./responsive"



export const SignInLayout = () => {
  return (
    <ResponsiveSignInLayout  maxWidth={false} sx={{
      width: "100%",
      height: "100vh",
      background: "white",
      margin: '0px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div id='signinFormCard'>
        <SignInFormComponent/>
      </div>
      <div id='imageSignIn'>
        <img 
          src={require("../../assets/sign-in.png")}
          alt="sign in background"
          style={{
            height: "600px",
            width: "600px",
          }}
        />
      </div>
    </ResponsiveSignInLayout>
  )
}