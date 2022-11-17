import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StyledEngineProvider injectFirst>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </StyledEngineProvider>
);
