import { Container } from "@mui/material";
import React from "react";

export const RightLoginLayout = () => {
  return (
    <Container
      sx={{
        width: "50%",
        height: "100vh",
        background: "#dde9f5",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <img
          src={require("../../assets/cloud-animation.png")}
          alt="sign in background"
          style={{
            height: "700px",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 2,
        }}
      >
        <img
          src={require("../../assets/sign-in-img.png")}
          alt="sign in background"
          style={{
            height: "500px",
            width: "500px",
          }}
        />
      </div>
    </Container>
  );
};
