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
import HelpIcon from "@mui/icons-material/Help";
import styled from "@emotion/styled";
import { theme } from "../../theme/theme";
import React from "react";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { mapStatusToToast } from "../../utils/toast-status-map";
import { Toast } from "../toast";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

export const SignInFormComponent = () => {
  const { handleSubmit, actionStatus, error } = useSignIn();
  const [emailFocus, setEmailFocus] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [toastSeverity, setToastSeverity] = useState<
    "error" | "success" | "info" | "warning"
  >("info");


  useEffect(() => {
    if (actionStatus === "success") {
      setToastMessage("Sign in successfully");
      setToastSeverity("success");
      setShowToast(true);

      const timer = setTimeout(() => {
        setShowToast(false);
      }, 1500);

      return () => {
        clearTimeout(timer);
      };
    }
    if (actionStatus === 'error') {
      setToastMessage("Wrong Credentials");
      setToastSeverity("error");
      setShowToast(true);

      const timer = setTimeout(() => {
        setShowToast(false);
      }, 1500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [actionStatus]);

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
      <div className="RowForm">
        <TextField
          className="InputStyle"
          id="outlined-basic"
          label="Email"
          name="email"
          variant="outlined"
        />
        <HtmlTooltip
          title={
            <React.Fragment>
              {
                "An email address should consist of a username, followed by the '@' symbol, and a domain name"
              }
            </React.Fragment>
          }
        >
          <HelpIcon className="HelperMark" />
        </HtmlTooltip>
      </div>

      <div className="RowForm">
        <TextField
          className="InputStyle"
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <HtmlTooltip
          title={
            <React.Fragment>
              <ul>
                <li>Must be at least 8 characters long.</li>
                <li>Must contain at least one digit (0-9).</li>
                <li>Must contain at least one lowercase letter (a-z).</li>
                <li>Must contain at least one uppercase letter (A-Z).</li>
                <li>
                  Must contain at least one special character from the set:
                  !@#$%^&*?"
                </li>
              </ul>
            </React.Fragment>
          }
        >
          <HelpIcon className="HelperMark" />
        </HtmlTooltip>
      </div>

      <SignInButton actionStatus={actionStatus} />
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
      <Toast open={showToast} severity={toastSeverity} message={toastMessage} />
    </FormControl>
  );
};
