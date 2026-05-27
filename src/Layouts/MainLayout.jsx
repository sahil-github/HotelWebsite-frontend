import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Outlet />

      <Footer />
    </Box>
  );
};

export default MainLayout;
