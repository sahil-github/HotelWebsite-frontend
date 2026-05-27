import React from "react";
import { Box, Container, Grid, Typography, Stack, Divider } from "@mui/material";
import AmenityCard from "./AmenityCard";
import AnimatedText from "../../Components/AnimatedText";
import { motion } from "framer-motion";

// MUI Icons
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";

const amenities = [
  {
    icon: <RoomServiceOutlinedIcon />,
    title: "Room Service",
    desc: "Exquisite dining brought to your door.",
  },
  {
    icon: <LocalParkingOutlinedIcon />,
    title: "Valet Parking",
    desc: "Complimentary secure valet service.",
  },
  {
    icon: <SecurityOutlinedIcon />,
    title: "Elite Security",
    desc: "Discreet 24/7 protection for your peace of mind.",
  },
  {
    icon: <WifiOutlinedIcon />,
    title: "Ultra-Fast Wi-Fi",
    desc: "Seamless connectivity throughout the estate.",
  },
  {
    icon: <EventOutlinedIcon />,
    title: "Curated Events",
    desc: "Bespoke venues for unforgettable moments.",
  },
  {
    icon: <AirportShuttleOutlinedIcon />,
    title: "Luxury Transfer",
    desc: "Private airport pickup and drop-off.",
  },
  {
    icon: <TvOutlinedIcon />,
    title: "Entertainment",
    desc: "State-of-the-art flat-screen systems.",
  },
  {
    icon: <AcUnitOutlinedIcon />,
    title: "Climate Control",
    desc: "Personalized environmental comfort.",
  },
  {
    icon: <RestaurantOutlinedIcon />,
    title: "Fine Dining",
    desc: "Culinary masterpieces by world-class chefs.",
  },
];

const Amenities = () => {
  return (
    <Box sx={{ pt: 12, pb: 8, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="xl">
        <AnimatedText
          variant="h4"
          fontWeight={700}
          sx={{ ml: 2, mt: 2, mb: 2, textAlign: "center" }}
        >
          AMENITIES
        </AnimatedText>

        <Divider sx={{ mb: 6 }} />

        <Box
          sx={{
            mb: 8,
            py: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
          }}
        >

          <Grid container spacing={4} justifyContent="center">
            {amenities.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * (index % 3) + 0.3 // Staggered by row-ish
                  }}
                >
                  <AmenityCard
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Amenities;
