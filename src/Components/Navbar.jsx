import * as React from "react";
import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
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
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Logo from "../assets/GULMOHARLOGO.png";
import { motion, AnimatePresence } from "framer-motion";


const drawerWidth = 280;
const GOLD = "#C8A96B";
const GOLD_DARK = "#a8893e";

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
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const isHome = location.pathname === "/";
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAnchorEl(null);
    navigate("/home");
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = document.documentElement.scrollTop > 30;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  // Decide navbar appearance
  // On home: transparent → frosted dark on scroll
  // On other pages: always frosted white (since bg is white/light)
  const navBg = isHome
    ? scrolled
      ? "rgba(10, 10, 10, 0.88)"
      : "transparent"
    : scrolled
      ? "rgba(255, 255, 255, 0.75)"
      : " rgba(10, 10, 10, 0.88)";

  const navBorderBottom = isHome
    ? scrolled
      ? `1px solid rgba(200, 169, 107, 0.2)`
      : "none"
    : `1px solid rgba(0,0,0,0.07)`;

  const backdropFilter = (isHome && !scrolled) ? "none" : "blur(18px) saturate(180%)";

  const linkColor = isHome ? "#fff" : scrolled ? "#1a1a1a" : "#1a1a1a";
  const linkActiveColor = GOLD;

  // Mobile Drawer
  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(160deg, #0a0a0a 0%, #1a1509 100%)",
        p: 0,
        overflowX: "hidden",
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 3,
          pt: 3,
          pb: 2,
          borderBottom: "1px solid rgba(200,169,107,0.15)",
        }}
      >
        <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src={Logo}
            alt="Gulmohar Logo"
            style={{ height: "48px", width: "auto", objectFit: "contain" }}
          />
        </NavLink>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: "rgba(255,255,255,0.7)",
            "&:hover": { color: "#fff", backgroundColor: "rgba(255,255,255,0.08)" },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Nav Links */}
      <List sx={{ flex: 1, px: 2, py: 3 }}>
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: "12px",
                  px: 2.5,
                  py: 1.4,
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: isActive
                    ? "rgba(200,169,107,0.12)"
                    : "transparent",
                  border: isActive
                    ? "1px solid rgba(200,169,107,0.25)"
                    : "1px solid transparent",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    backgroundColor: "rgba(200,169,107,0.08)",
                    border: "1px solid rgba(200,169,107,0.15)",
                  },
                }}
              >
                {isActive && (
                  <Box
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "3px",
                      height: "60%",
                      borderRadius: "0 4px 4px 0",
                      backgroundColor: GOLD,
                    }}
                  />
                )}
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: "1rem",
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: "0.04em",
                    color: isActive ? GOLD : "rgba(255,255,255,0.85)",
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Divider */}
      <Box sx={{ px: 3, mb: 2 }}>
        <Divider sx={{ borderColor: "rgba(200,169,107,0.15)" }} />
      </Box>

      {/* Book Now CTA */}
      <Box sx={{ px: 3, pb: 4 }}>
        <Button
          fullWidth
          variant="contained"
          component={NavLink}
          to="/booking"
          onClick={handleDrawerToggle}
          sx={{
            background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DARK} 100%)`,
            color: "#fff",
            borderRadius: "12px",
            py: 1.6,
            fontSize: "0.95rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            boxShadow: `0 8px 24px rgba(200,169,107,0.35)`,
            transition: "all 0.3s ease",
            "&:hover": {
              background: `linear-gradient(135deg, ${GOLD_DARK} 0%, ${GOLD} 100%)`,
              transform: "translateY(-1px)",
              boxShadow: `0 12px 30px rgba(200,169,107,0.45)`,
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
          backgroundColor: navBg,
          backdropFilter: backdropFilter,
          WebkitBackdropFilter: backdropFilter,
          boxShadow: scrolled
            ? "0 4px 24px rgba(0,0,0,0.08)"
            : "none",
          borderBottom: navBorderBottom,
          transition:
            "background-color 0.45s cubic-bezier(0.4,0,0.2,1), box-shadow 0.45s cubic-bezier(0.4,0,0.2,1), border-bottom 0.45s cubic-bezier(0.4,0,0.2,1)",
          width: "100%",
          zIndex: 1200,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            px: { xs: 2, sm: 3, md: 5 },
            py: 0,
            minHeight: { xs: "64px", md: scrolled ? "64px" : "80px" },
            transition: "min-height 0.35s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {/* LEFT — Logo */}
          <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
            <NavLink
              to="/"
              style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
            >
              <img
                src={Logo}
                alt="Gulmohar Logo"
                style={{
                  height: scrolled ? "40px" : "52px",
                  width: "auto",
                  display: "block",
                  objectFit: "contain",
                  transition: "height 0.35s cubic-bezier(0.4,0,0.2,1)",
                }}
              />
            </NavLink>
          </Box>

          {/* CENTER — Desktop Nav Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
            }}
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Box
                  key={item.label}
                  sx={{ position: "relative", display: "flex", alignItems: "center" }}
                >
                  <Button
                    component={NavLink}
                    to={item.path}
                    sx={{
                      color: isActive ? linkActiveColor : linkColor,
                      fontSize: "0.9rem",
                      fontWeight: isActive ? 700 : 500,
                      letterSpacing: "0.04em",
                      textTransform: "none",
                      px: 1.8,
                      py: 1,
                      borderRadius: "8px",
                      position: "relative",
                      transition: "color 0.3s ease, background-color 0.3s ease",
                      backgroundColor: isActive
                        ? "rgba(200,169,107,0.1)"
                        : "transparent",
                      "&:hover": {
                        color: linkActiveColor,
                        backgroundColor: isHome
                          ? "rgba(200,169,107,0.12)"
                          : "rgba(200,169,107,0.08)",
                      },
                    }}
                  >
                    {item.label}
                    {/* Active underline indicator */}
                    {isActive && (
                      <Box
                        component={motion.div}
                        layoutId="nav-indicator"
                        sx={{
                          position: "absolute",
                          bottom: "4px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "20px",
                          height: "2px",
                          borderRadius: "2px",
                          backgroundColor: GOLD,
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Button>
                </Box>
              );
            })}
          </Box>

          {/* RIGHT — Actions */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: "flex-end",
            }}
          >
            {/* Book Now CTA — desktop only */}
            {/* <Button
              component={NavLink}
              to="/booking"
              sx={{
                display: { xs: "none", md: "inline-flex" },
                background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DARK} 100%)`,
                color: "#fff",
                borderRadius: "8px",
                px: 2.5,
                py: 0.9,
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "none",
                boxShadow: `0 4px 14px rgba(200,169,107,0.35)`,
                transition: "all 0.3s ease",
                "&:hover": {
                  background: `linear-gradient(135deg, ${GOLD_DARK} 0%, ${GOLD} 100%)`,
                  transform: "translateY(-1px)",
                  boxShadow: `0 6px 20px rgba(200,169,107,0.45)`,
                },
              }}
            >
              Book Now
            </Button> */}

            {/* Avatar / Profile dropdown — only shown when logged in */}
            {isLoggedIn && (
              <>
                <IconButton
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                  sx={{ p: 0.5, ml: 0.5 }}
                >
                  <Avatar
                    sx={{
                      width: 36,
                      height: 36,
                      background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DARK} 100%)`,
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "#fff",
                      boxShadow: `0 2px 10px rgba(200,169,107,0.4)`,
                      transition: "box-shadow 0.3s ease",
                      "&:hover": {
                        boxShadow: `0 4px 16px rgba(200,169,107,0.55)`,
                      },
                    }}
                  >
                    G
                  </Avatar>
                </IconButton>

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      mt: 1,
                      borderRadius: "12px",
                      minWidth: 180,
                      border: "1px solid rgba(0,0,0,0.06)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                      overflow: "hidden",
                      "& .MuiMenuItem-root": {
                        px: 2,
                        py: 1.3,
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        gap: 1.5,
                        transition: "background-color 0.2s ease",
                        "&:hover": {
                          backgroundColor: "rgba(200,169,107,0.08)",
                          color: GOLD,
                        },
                      },
                    },
                  }}
                >
                  <Box sx={{ px: 2, py: 1.5, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                    <Typography variant="caption" color="text.secondary" fontWeight={600} letterSpacing="0.05em">
                      ACCOUNT
                    </Typography>
                  </Box>
                  <MenuItem
                    component={NavLink}
                    to="/profile"
                    onClick={() => setAnchorEl(null)}
                  >
                    <PersonOutlineIcon fontSize="small" />
                    My Profile
                  </MenuItem>
                  <MenuItem onClick={() => setAnchorEl(null)}>
                    <SettingsOutlinedIcon fontSize="small" />
                    Settings
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem
                    onClick={handleLogout}
                    sx={{ color: "#e53935 !important", "&:hover": { backgroundColor: "rgba(229,57,53,0.06) !important" } }}
                  >
                    <LogoutIcon fontSize="small" />
                    Logout
                  </MenuItem>
                </Menu>
              </>
            )}

            {/* Mobile Hamburger */}
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                display: { md: "none" },
                color: isHome ? "#fff" : "#1a1a1a",
                ml: 0.5,
                borderRadius: "10px",
                backgroundColor: isHome
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.05)",
                "&:hover": {
                  backgroundColor: isHome
                    ? "rgba(255,255,255,0.18)"
                    : "rgba(0,0,0,0.1)",
                },
                transition: "all 0.3s ease",
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
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            border: "none",
          },
          "& .MuiBackdrop-root": {
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(0,0,0,0.4)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}