import React from "react";
import logo from "./logo.svg";
import { PublicRouter, routePaths } from "./routes";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PublicRouter />
    </ThemeProvider>
  );
}

export default App;
