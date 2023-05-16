import { Container } from "@mui/material";
import React from "react";
import { SignInFormComponent } from "../../components/sign-in";

export const LeftLoginLayout = () => {
  return (
    <Container
      sx={{
        width: "50%",
        height: "100vh",
        background: "white",
        position: "relative"
      }}
    >
      
      <div
        style={{
          position: "absolute",
          top: '70px',
          left: 0,
          zIndex: 1,
        }}
      >
        <img
          src={require("../../assets/sign-in-form-bg.png")}
          alt="sign in background"
          style={{
            height: "500px",
            width: "80%",
          }}
        />
      </div>
      <SignInFormComponent />
    </Container>
  );
};
