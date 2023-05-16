import { Container, FormControl, TextField, Typography } from "@mui/material";
import "./style.css";
import { SigninButton } from "../button";

export const SignInFormComponent = () => {
  return (
    <FormControl className="FormStyle">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: "10px",
          height: "50%",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
        maxWidth="xs"
      >
        <Typography
          variant="h4"
          fontWeight="500"
          sx={{ marginBottom: "20px" }}
          className="TitleStyle"
        >
          Sign in
        </Typography>
        <TextField
          className="InputStyle"
          id="outlined-basic"
          label="Full name"
          variant="outlined"        
          style={{ marginTop: '0px'}}  
        />
        <TextField
          className="InputStyle"
          id="outlined-basic"
          label="User name"
          variant="outlined"
        />
        <TextField
          className="InputStyle"
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          className="InputStyle"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <SigninButton />
      </Container>
    </FormControl>
  );
};
