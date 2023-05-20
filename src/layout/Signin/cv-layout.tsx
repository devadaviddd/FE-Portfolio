import { Box, Container } from "@mui/material";
import { cvs } from "../../constant";
import { useState } from "react";
import { CVCarousel } from "../../components/CV-carousel";


export const CVLayout = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: "100%",
        height: "65vh",
        background: "#dde9f5",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CVCarousel/>
    </Container>
  );
};
