import { Container, Stack, Typography } from "@mui/material";
import { skills } from "../../constant";
import { Skill } from "../../components/sign-in";
import "./style.css";
import { HexagonAvatar } from "../../components/user-hexagon";
import { useInView } from "framer-motion";
import { useRef } from "react";
import styled from "@emotion/styled";
import { theme } from "../../theme/theme";
import { ResponsiveSkillsLayout, ResponsiveStack } from "./responsive";

const ResponsiveHexagonAvatar = styled("div")(() => ({
  [theme.breakpoints.down("md")]: {
    backgroundColor: "red",
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: "pink",
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: "yellow",
  },
}));

export const SkillsLayout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <ResponsiveSkillsLayout maxWidth={false}>
      <div id="skillTitleCard">
        <Typography
          variant="h3"
          fontWeight="300"
          className="TitleStyle"
          marginTop={"40px"}
        >
          Find your skill and other hubs
        </Typography>
      </div>

      <div id="skillsContainer">
        <ResponsiveStack
          id="skillsStack"
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
          height={"100%"}
        >
          <div className="Skills">
            {skills.map((skill, index) => (
              <Skill name={skill.name} />
            ))}
          </div>
        </ResponsiveStack>

        <div
          ref={ref}
          id='avatarAssets'
          style={{
            transform: isInView ? "translateY(-200px)" : "none",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            position: "absolute",
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
              bottomPosition="-300px"
              rightPosition="3rem"
            />

            <HexagonAvatar
              avatar="user-default"
              bottomPosition="-200px"
              rightPosition= "15rem"
            />

            <HexagonAvatar
              avatar="user-default"
              bottomPosition="-300px"
              rightPosition="25rem"
            />
        </div>
      </div>
    </ResponsiveSkillsLayout>
  );
};
