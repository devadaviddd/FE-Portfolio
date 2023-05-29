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
import React, { useEffect, useRef, useState } from "react";
import HelpIcon from "@mui/icons-material/Help";
import { useSignUp } from "../../hooks";
import { Toast } from "../toast";
import { useInView } from "framer-motion";
import { LeftLayOutResponse, SignUpFormResponsive } from "../../layout";

export const SignUpFormComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
      <SignUpFormResponsive
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: "10px",
          height: "70vh",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          position: "relative",
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

        <div
          style={{
            position: "absolute",
            top: "-6rem",
            left: "-10rem",
            zIndex: -1,
            height: "500px",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
          ref={ref}
        >
          <img
            src={require("../../assets/sign-in-form-bg.png")}
            alt="sign in background"
            style={{}}
          />
        </div>

        <div
          style={{
            // bottom: "-6rem",
            // right: "-8rem",
            // zIndex: -1,
            // height: "70%",
            // width: "100%",
            position: "absolute",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
          ref={ref}
          id='backgroundBelowForm2'
        >
          <img
            src={require("../../assets/cloud-animation.png")}
            alt="sign in background"
            style={{
              // objectFit: "cover",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
      </SignUpFormResponsive>

      <Toast open={showToast} severity={toastSeverity} message={toastMessage} />
    </FormControl>
  );
};
