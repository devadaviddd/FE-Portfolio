import {
  Container,
  FormControl,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import "./style.css";
import { RegisterButton, SignInButton, SignUpButton } from "../button";
import { NavLink } from "react-router-dom";

export const SignInFormComponent = () => {
  return (
    <FormControl className="FormStyle">
      <Typography
        variant="h2"
        fontWeight="300"
        sx={{ marginBottom: "20px" }}
        className="TitleStyle"
      >
        Welcome to Me Hub
      </Typography>
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
      <SignInButton />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
        }}
      >
        <div className="LineDecoration"></div>
        <Typography
          sx={{
            margin: "0px 10px",
            marginBottom: "0px",
          }}
        >
          or
        </Typography>
        <div className="LineDecoration"></div>
      </div>
      <RegisterButton textArea="New to MeHub? Join now" />
    </FormControl>
  );
};
