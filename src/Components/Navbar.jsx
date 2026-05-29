import * as React from "react";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Profile from "./Profile";
import Logo from "../assets/GULMOHARLOGO.png";

const drawerWidth = 240;

const navItems = [
  { label: "Home", path: "/" },
  { label: "Amenities", path: "/amenities" },
  { label: "Rooms", path: "/rooms" },
  { label: "Gallery", path: "/galleryphoto" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // OPTIMIZED scroll listener with state bailout check and passive listener
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = document.documentElement.scrollTop > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(5px)",
        p: 2,
      }}
    >
      <Box sx={{ mb: 2 }}>
        <img
          src={Logo}
          alt="Gulmohar Logo"
          style={{ height: "200px", width: "auto", objectFit: "contain" }}
        />
      </Box>

      <List sx={{ mb: 4, flexGrow: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 2 }}>
            <ListItemButton
              component={NavLink}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: "12px",
                // FIX 2: NavLink adds "active" class automatically, this works correctly
                "&.active": {
                  backgroundColor: "rgba(0,0,0,0.08)",
                  color: "#C8A96B",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* FIX 3: mt:"auto" only works when parent is flexDirection:"column" — fixed above */}
      <Box sx={{ mt: "auto" }}>
        {/* FIX 4: Book Now button now navigates to /contact */}
        <Button
          fullWidth
          variant="contained"
          component={NavLink}
          to="/contact"
          onClick={handleDrawerToggle}
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "999px",
            py: 1.8,
            fontSize: "0.9rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
        >
          Book Now
        </Button>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? "rgba(248, 247, 244, 0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.08)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.05)" : "none",
          transition: "background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          width: "100%",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            px: { xs: 2, md: 4 },
            py: scrolled ? 0.8 : 1.8,
            transition: "padding-top 0.4s cubic-bezier(0.4, 0, 0.2, 1), padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: "padding-top, padding-bottom",
          }}
        >
          {/* LEFT — Logo */}
          <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
            <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
              <img
                src={Logo}
                alt="Gulmohar Logo"
                style={{
                  height: scrolled ? "40px" : "50px",
                  width: "auto",
                  display: "block",
                  objectFit: "contain",
                  transition: "height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "height",
                }}
              />
            </NavLink>
          </Box>

          {/* CENTER — Desktop Nav Links */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: { sm: 1, md: 2 },
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={NavLink}
                to={item.path}
                sx={({ palette }) => ({
                  color:
                    location.pathname === item.path
                      ? "#C8A96B"
                      : scrolled
                        ? "#1a1a1a"
                        : "#fff",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "none",
                  px: 2,
                  py: 0.8,
                  borderRadius: "999px",
                  transition: "color 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  backgroundColor:
                    location.pathname === item.path
                      ? scrolled
                        ? "rgba(200, 169, 107, 0.1)"
                        : "rgba(255, 255, 255, 0.15)"
                      : "transparent",
                  "&:hover": {
                    backgroundColor: scrolled
                      ? "rgba(200, 169, 107, 0.08)"
                      : "rgba(255, 255, 255, 0.1)",
                    color: "#C8A96B",
                  },
                })}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* RIGHT — Actions */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, md: 2 },
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="outlined"
              component={NavLink}
              to="/contact"
              sx={{
                borderColor: scrolled ? "#1a1a1a" : "#C8A96B",
                color: scrolled ? "#1a1a1a" : "#C8A96B",
                borderRadius: "999px",
                px: 2.5,
                py: 0.8,
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "none",
                display: { xs: "none", md: "inline-flex" },
                transition: "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.3s ease",
                "&:hover": {
                  backgroundColor: scrolled ? "#1a1a1a" : "#C8A96B",
                  borderColor: scrolled ? "#1a1a1a" : "#C8A96B",
                  color: scrolled ? "#fff" : "#000",
                  transform: "scale(1.05)",
                },
              }}
            >
              Get Started
            </Button>

            <Profile />

            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                display: { sm: "none" },
                color: scrolled ? "#1a1a1a" : "#fff",
                transition: "color 0.4s ease",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}