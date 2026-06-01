import React from "react";
import { Typography, Box, Grid, Container, Divider, CircularProgress } from "@mui/material";
import BookingCard from "./Booking/BookingCard";
import EastIcon from "@mui/icons-material/East";
import AnimatedText from "../Components/AnimatedText";
import { motion } from "framer-motion";
import useGalleryImages from "../hooks/useGalleryImages";

const Rooms = () => {
  const { imageMap, loading } = useGalleryImages();

  const rooms = [
    {
      name: "Executive Room",
      size: "42 sqm",
      capacity: "3 Adults",
      price: "₹4,800",
      imageTitle: "R4",
    },
    {
      name: "Deluxe Room",
      size: "38 sqm",
      capacity: "2 Adults",
      price: "₹3,900",
      imageTitle: "R2",
    },
    {
      name: "Premium Suite",
      size: "60 sqm",
      capacity: "4 Adults",
      price: "₹7,200",
      imageTitle: "R3",
    },
    {
      name: "Premium Suite",
      size: "60 sqm",
      capacity: "4 Adults",
      price: "₹7,200",
      imageTitle: "R5",
    },
  ];

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
        <CircularProgress />
      </Box>
    );
  }

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
                  <BookingCard room={{ ...room, image: imageMap[room.imageTitle] }} />
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

