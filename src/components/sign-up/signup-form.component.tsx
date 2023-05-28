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
import { HtmlTooltip } from "../tooltip";
import React, { useEffect, useState } from "react";
import HelpIcon from "@mui/icons-material/Help";
import { useSignUp } from "../../hooks";
import { Toast } from "../toast";

export const SignUpFormComponent = () => {
  const {
    handleSubmit,
    actionStatus,
    error,
    showToast,
    toastMessage,
    toastSeverity,
  } = useSignUp();
  return (
    <FormControl
      className="FormStyle"
      component={"form"}
      onSubmit={handleSubmit}
    >
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
        <div className="RowForm">
          <TextField
            className="InputStyle"
            id="outlined-basic"
            label="Full name"
            variant="outlined"
            name="fullName"
            style={{ marginTop: "0px" }}
          />
          <HtmlTooltip
            title={<React.Fragment>{"Your full name"}</React.Fragment>}
          >
            <HelpIcon className="HelperMark" />
          </HtmlTooltip>
        </div>

        <div className="RowForm">
          <TextField
            className="InputStyle"
            id="outlined-basic"
            label="User name"
            variant="outlined"
            name="username"
          />
          <HtmlTooltip
            title={
              <React.Fragment>
                <ul>
                  <li>
                    It can contain alphabetic characters (a-z) in lowercase or
                    uppercase
                  </li>
                  <li>It should be between 1 and 20 characters in length</li>
                  <li>
                    Special characters, numbers, and spaces are not allowed.
                  </li>
                </ul>
              </React.Fragment>
            }
          >
            <HelpIcon className="HelperMark" />
          </HtmlTooltip>
        </div>

        <div className="RowForm">
          <TextField
            className="InputStyle"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
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
            autoComplete="current-password"
            variant="outlined"
            name="password"
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

        <SignUpButton textArea="Sign Up" actionStatus={actionStatus} />
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
      <Toast open={showToast} severity={toastSeverity} message={toastMessage} />
    </FormControl>
  );
};
