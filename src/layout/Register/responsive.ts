import { styled } from "@mui/material/styles";
import { Container, FormControl, Stack } from "@mui/material";
import { theme } from "../../theme/theme";

// export const RightLayOutResponsive = styled(Container)(() => ({
//   [theme.breakpoints.down("lg")]: {
//     display: "none",
//   },
// }));

export const RightLayOutResponsive = styled(Stack)(() => ({
  [theme.breakpoints.down("lg")]: {
    "& #rightLayout": {
      display: "none",
    },
  },
  [theme.breakpoints.up("lg")]: {
    "& #rightLayout": {
      width: "50%",
    },
  },
}));

export const SignUpFormResponsive = styled(Container)(() => ({
  [theme.breakpoints.up("md")]: {
    "& #backgroundBelowForm2": {
      bottom: "-6rem",
      right: "-8rem",
      zIndex: -1,
      height: "70%",
      width: "100%",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& #backgroundBelowForm2": {
      bottom: "-6rem",
      right: "-5rem",
      zIndex: -1,
      height: "70%",
      width: "100%",
    },
  },
  [theme.breakpoints.down("tablet")]: {
    "& #backgroundBelowForm2": {
      bottom: "-6rem",
      right: "0rem",
      zIndex: -1,
      height: "70%",
      width: "95%",
    },
    width: "90%"
  }
}));

export const LeftLayOutResponse = styled(Container)(() => ({
  [theme.breakpoints.between("xs", "lg")]: {
    width: "100%",
    height: "100%",
    padding: "0px",
  },
}));

