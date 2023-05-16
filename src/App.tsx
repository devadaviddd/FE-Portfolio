import React from "react";
import logo from "./logo.svg";
import { PublicRouter, routePaths } from "./routes";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <PublicRouter />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
