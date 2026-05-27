import React from "react";

import { useEffect } from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import R2 from "../assets/R2.JPG";
import R3 from "../assets/R3.png";
import R4 from "../assets/R4.JPG";
import d1 from "../assets/d1.jpg"
import d2 from "../assets/d2.jpg"
import d3 from "../assets/d3.jpg"
import d4 from "../assets/d4.jpg"
import f1 from "../assets/f1.jpg"
import f2 from "../assets/f2.jpg"
import f3 from "../assets/f3.jpg"
import f4 from "../assets/f4.JPG"
import f5 from "../assets/f5.jpg"
import Dish from "../assets/Dish.jpg"
import softdrink from "../assets/Softdrink.jpg"
import AnimatedText from "../Components/AnimatedText";

const GalleryPhoto = () => {
  const images = [R2, R3, R4, d1, d2, d3, d4, softdrink, Dish, f1, f3, f4, f5, f2];

  // Lazy load animation on mount
  useEffect(() => {
    const imgs = document.querySelectorAll(".room-img");
    imgs.forEach((img, idx) => {
      img.style.opacity = 0;
      setTimeout(() => (img.style.opacity = 1), idx * 200);
    });
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff",
        px: { xs: 2, md: 12 },
        py: 4,
      }}
    >
      <AnimatedText
        variant="h4"
        fontWeight={700}
        sx={{ ml: 2, mt: 2, textAlign: "center" }}
      >
        GALLERY
      </AnimatedText>
      <Divider sx={{ mb: 6 }} />

      <Grid container spacing={3} justifyContent="center" >
        {images.map((img, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Box
              component="img"
              src={img}
              loading="lazy"
              alt={`Room ${index}`}
              className="room-img"
              sx={{
                width: "100%",
                height: { xs: 220, md: 260 },
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                transition: "transform 0.4s ease, opacity 0.6s ease",
                "&:hover": { transform: "scale(1.03)" },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GalleryPhoto;
