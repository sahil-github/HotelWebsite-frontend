import React from "react";
import { Typography, Box, Grid, Container, Stack, Button, Divider } from "@mui/material";
import BookingCard from "./Booking/BookingCard";
import R3 from "../assets/R3.png";
import R4 from "../assets/R4.JPG";
import R2 from "../assets/R2.JPG";
import R5 from "../assets/R5.JPG";
import EastIcon from "@mui/icons-material/East";
import AnimatedText from "../Components/AnimatedText";
import { motion } from "framer-motion";

const Rooms = () => {
  const rooms = [
    {
      name: "Executive Room",
      size: "42 sqm",
      capacity: "3 Adults",
      price: "₹4,800",
      image: R4,
    },
    {
      name: "Deluxe Room",
      size: "38 sqm",
      capacity: "2 Adults",
      price: "₹3,900",
      image: R2,
    },
    {
      name: "Premium Suite",
      size: "60 sqm",
      capacity: "4 Adults",
      price: "₹7,200",
      image: R3,
    },
    {
      name: "Premium Suite",
      size: "60 sqm",
      capacity: "4 Adults",
      price: "₹7,200",
      image: R5,
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ pt: 12, pb: 8 }}>
      <AnimatedText
        variant="h4"
        fontWeight={700}
        sx={{ ml: 2, mt: 2, textAlign: "center" }}
      >
        ROOMS
      </AnimatedText>

      <Divider sx={{ mb: 6 }} />

      <Box
        sx={{
          mb: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <Grid container spacing={4} justifyContent="center">
            {rooms.map((room, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                >
                  <BookingCard room={room} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Box>

    </Container>
  );
};

export default Rooms;
