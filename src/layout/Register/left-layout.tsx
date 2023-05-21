import { Container } from "@mui/material";
import React from "react";
import { SignUpFormComponent } from "../../components";
import { useRef } from "react";
import { useInView } from "framer-motion";

export const LeftRegisterLayout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container
      sx={{
        width: "50%",
        height: "100vh",
        background: "white",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "50px",
          zIndex: 1,
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
          bottom: 0,
          right: 0,
          zIndex: 1,
          height: "80%",
          width: "100%",
          position: "absolute",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
        ref={ref}

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
      <SignUpFormComponent />
    </Container>
  );
};
