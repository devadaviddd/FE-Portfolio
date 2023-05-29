import { theme } from "../../theme/theme";
import styled from "@emotion/styled";
import {
  Container,
  FormControl,
  FormControlTypeMap,
  Stack,
  StackProps,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

export const ResponsiveSignInLayout = styled(Container)(() => ({
  [theme.breakpoints.up("lg")]: {
    "& #imageSignIn": {
      width: "45%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    "& #signinFormCard": {
      width: "45%",
      height: "100%",
    },
  },
  [theme.breakpoints.down("lg")]: {
    "& #imageSignIn": {
      display: "none",
    },
    "& #signinFormCard": {
      width: "100%",
      height: "100%",
      textAlign: "center",
    },
  },
}));

export const ResponsiveSkillsLayout = styled(Container)(() => ({
  [theme.breakpoints.up("lg")]: {
    background: "#f3f2f0",
    width: "100%",
    height: "50vh",
    margin: "0px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    "& #skillTitleCard": {
      width: "45%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
    },
    "& #skillsContainer": {
      width: "45%",
      height: "100%",
    },
  },
  [theme.breakpoints.down("skillLoginBp")]: {
    background: "#f3f2f0",
    width: "100%",
    height: "50vh",
    margin: "0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& #skillTitleCard": {
      width: "100%",
      height: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    "& #skillsContainer": {
      width: "100%",
      height: "100%",
    },
    "& #avatarAssets": {
      display: "none",
    },
  },
}));

export const ResponsiveStack = styled(Stack)<StackProps>(() => ({
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "8px",
  },
  [theme.breakpoints.down("skillLoginBp")]: {
    flexDirection: "row",
    gap: "8px",
    // alignItems: "center",
    "& .Skills": {
      width: "100%",
      justifyContent: "center",
      marginTop: "0px",
    },
  },
  [theme.breakpoints.down("lg")]: {
    "& #avatarAssets": {
      display: "none",
    },
  },
}));

export const ResponsiveCVLayout = styled(motion.img)(() => ({
  [theme.breakpoints.down("tablet")]: {
    height: "400px",
    width: "400px",
  },

  [theme.breakpoints.down("mobile")]: {
    height: "300px",
    width: "300px",
  },
}));

// export const ResponsiveToast = styled("div")(() => ({
//   width: "100%",
// }));
