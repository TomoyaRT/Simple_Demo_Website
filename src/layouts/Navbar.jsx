// React
import { useState } from "react";

// MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

// Store
import { useSwitchMode } from "../store/index";

// View
function Navbar() {
  const mode = useSwitchMode((state) => state.mode);
  const useDarkMode = useSwitchMode((state) => state.useDarkMode);
  const useLightMode = useSwitchMode((state) => state.useLightMode);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Demo Website
          </Typography>
          {mode === "light" ? (
            <LightModeIcon onClick={useDarkMode} />
          ) : (
            <DarkModeIcon onClick={useLightMode} />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
