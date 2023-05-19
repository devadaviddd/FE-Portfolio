import { FormControl, TextField, Typography } from "@mui/material";
import "./style.css";
import { RegisterButton, SignInButton } from "../button";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useUserSlice } from "../../store";
import { SignInDto } from "../../domains";

export const SignInFormComponent = () => {
  const dispatch = useAppDispatch();
  const { actions } = useUserSlice();
  const { actionStatus } = useAppSelector((state) => state.user);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    const input: SignInDto = {
      email: data.get("email") as string,
      password: data.get("password") as string,
    }
    dispatch(actions.signIn(input));
  };

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
      />
      <TextField
        className="InputStyle"
        id="outlined-password-input"
        label="Password"
        type="password"
        name="password"
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
