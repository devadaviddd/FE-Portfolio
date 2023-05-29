import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: "#676cf0", // set your primary color here
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "1px solid rgba(0,0,0,0.6)",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 448,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
      skillLoginBp: 1425,
      iPhoneSE: 376,
    }
  } 
});

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
    skillLoginBp: true;
    iPhoneSE: true;
  }
}