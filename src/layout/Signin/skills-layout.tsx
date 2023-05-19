import { Container, Stack, Typography } from "@mui/material";
import { skills } from "../../constant";
import { Skill } from "../../components/sign-in";
import "./style.css";
import { HexagonAvatar } from "../../components/user-hexagon";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const SkillsLayout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <Container
      maxWidth={false}
      sx={{
        background: "#f3f2f0",
        width: "100%",
        height: "50vh",
        margin: "0px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "45%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="300"
          className="TitleStyle"
          marginTop={"40px"}
        >
          Find your skill and other hubs
        </Typography>
      </div>

      <div
        className="card-container"
        style={{
          width: "45%",
          height: "100%",
          position: "relative",
        }}
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
          height={"100%"}
        >
          <div className="SkillsContainer">
            {skills.map((skill, index) => (
              <Skill name={skill.name} />
            ))}
          </div>
        </Stack>

        <div
          ref={ref}
          style={{
            transform: isInView ? "translateY(-200px)" : "none",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <HexagonAvatar avatar="user-default" bottomPosition="-200px" />

          <HexagonAvatar
            avatar="user-default"
            bottomPosition="-300px"
            leftPosition="10rem"
          />

          <HexagonAvatar
            avatar="user-default"
            bottomPosition="-210px"
            rightPosition="60rem"
          />

          <HexagonAvatar
            avatar="user-default"
            bottomPosition="-300px"
            rightPosition="50rem"
          />

          <HexagonAvatar
            avatar="user-default"
            bottomPosition="-300px"
            rightPosition="70rem"
          />
        </div>
      </div>
    </Container>
  );
};
