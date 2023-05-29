import { Container } from "@mui/material";
import React from "react";
import { SignUpFormComponent } from "../../components";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { LeftLayOutResponse } from "./responsive";

export const LeftRegisterLayout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <LeftLayOutResponse
      sx={{
        width: "50%",
        height: "100vh",
        background: "white",
      }}
    >
      <SignUpFormComponent />  
    </LeftLayOutResponse>
  );
};
