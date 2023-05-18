import {
  Container,
  FormControl,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import "./style.css";
import { SignUpButton } from "../button";
import { NavLink } from "react-router-dom";

export const SignUpFormComponent = () => {
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
          height: "60vh",
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
          Sign up
        </Typography>
        <TextField
          className="InputStyle"
          id="outlined-basic"
          label="Full name"
          variant="outlined"
          style={{ marginTop: "0px" }}
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
        <SignUpButton textArea="Sign Up" />
        <Typography
          sx={{
            width: "100%",
            height: "50px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Already on MeHub? &nbsp;
          <NavLink to={"/signin"}>
            <Link href="" underline="none">
              Sign In
            </Link>
          </NavLink>
        </Typography>
      </Container>
    </FormControl>
  );
};
