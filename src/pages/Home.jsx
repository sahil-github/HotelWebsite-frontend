import React from "react";
import Box from "@mui/material/Box";
import { Typography, Container, Stack, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import HotelBG from "../assets/hotel-bg.png";
import About from "./About";
import Contact from "./Contact";
import Amenities from "./Amenities/Amenities";
import Rooms from "./Rooms";
import AnimatedText from "../Components/AnimatedText";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          position: "relative",
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(0,0,0,0.5) 0%,
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.6) 100%
          ), url(${HotelBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",         // vertically center both halves
          justifyContent: "space-between",
          color: "#fff",
          px: { xs: 4, md: 10 },        // horizontal padding instead of ml hacks
        }}
      >
        {/* LEFT HALF — Text */}
        <Box sx={{ flex: 1, maxWidth: "600px" }}>
          <Stack spacing={3} alignItems="start">
            <AnimatedText
              variant="h1"
              delay={0.5}
              sx={{
                fontWeight: 300,
                fontSize: { xs: "2.5rem", md: "4rem" },
                lineHeight: 0.9,
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              Crafted for Comfort, <br /> Designed for{" "}
              <span style={{ color: "#C8A96B" }}>You</span>
            </AnimatedText>

            <AnimatedText
              variant="body1"       // FIX: was h1, should be body1 for a subtitle
              delay={0.7}
              sx={{
                fontWeight: 200,
                fontSize: { xs: "1rem", md: "1.25rem" },
                opacity: 0.9,
                letterSpacing: "0.05em",
              }}
            >
              Experience the quiet, radiant serenity of a world beyond
              boundaries in the heart of luxury.
            </AnimatedText>
          </Stack>
        </Box>

        {/* RIGHT HALF — Button */}
        <Box
          sx={{
            flex: 1,
            justifyContent: "flex-end",  // push button to the far right
            alignItems: "center",
            mr: { xs: 4, md: 8 },
            display: { xs: "none", sm: "flex" },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderRadius: "999px",
                p: "6px",
                display: "flex",
                alignItems: "center",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
                border: "2px solid #fff",
              }}
            >
              <Button
                component={NavLink}
                to="/booking"
                sx={{
                  color: "#fff",
                  backgroundColor: "#C8A96B",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  letterSpacing: "0.05em",
                  py: 1.5,
                  px: 4.5,
                  borderRadius: "999px",
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#b8995a",
                    transform: "scale(1.03)",
                  },
                }}
              >
                Availability
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Box>

      <Rooms />
      <Amenities />
      <About />
      <Contact />
    </Box>
  );
};

export default Home;

