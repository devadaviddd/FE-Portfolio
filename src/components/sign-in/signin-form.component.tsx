import { FormControl, TextField, Typography } from "@mui/material";
import "./style.css";
import { RegisterButton, SignInButton } from "../button";
import { useSignIn } from "../../hooks";
import { useState, useEffect } from "react";
import HelpIcon from "@mui/icons-material/Help";
import React from "react";
import { Toast } from "../toast";
import { HtmlTooltip } from "../tooltip";

export const SignInFormComponent = () => {
  const {
    handleSubmit,
    actionStatus,
    error,
    showToast,
    toastMessage,
    toastSeverity,
  } = useSignIn();

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
