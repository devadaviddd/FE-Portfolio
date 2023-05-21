import {
  FormControl,
  TextField,
  Typography,
  TextFieldProps,
} from "@mui/material";
import "./style.css";
import { RegisterButton, SignInButton } from "../button";
import { useSignIn } from "../../hooks";
import { useRef, useState, useEffect } from "react";

export const SignInFormComponent = () => {
  const { handleSubmit, actionStatus, error } = useSignIn();
  const [emailFocus, setEmailFocus] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);


  useEffect(() => {
    if (error) {
      setEmailFocus(true);
      setEmailError(true);

      setPasswordError(true);
      setPasswordFocus(true);
    }
  }, [error])

  return (
    <FormControl className="FormStyle" component="form" onSubmit={handleSubmit}>
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
        name="email"
        variant="outlined"
        error={emailError}
        required={true}
        focused={emailFocus}
        onFocus={() =>  {
          if (error) {
            setEmailError(false);
          } 
          setEmailFocus(true);
        }}
        onBlur={() => setEmailFocus(false)}

      />
      <TextField
        className="InputStyle"
        id="outlined-password-input"
        label="Password"
        type="password"
        name="password"
        autoComplete="current-password"
        variant="outlined"
        error={passwordError}
        required={true}
        focused={passwordFocus}
        onFocus={() =>  {
          if (error) {
            setPasswordError(false);
          }
          setPasswordFocus(true);
        }}
        onBlur={() => setPasswordFocus(false)}
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
