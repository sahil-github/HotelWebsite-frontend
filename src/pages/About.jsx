import React from "react";
import { Box, Grid, Stack, Typography, Divider } from "@mui/material";
import ab from "../assets/ab.JPG";
import dish from "../assets/Dish.jpg";
import drinks from "../assets/Softdrink.jpg";
import AnimatedText from "../Components/AnimatedText";
import { motion } from "framer-motion";

const About = () => {
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
        ABOUT US
      </AnimatedText>

      <Divider sx={{ mb: 4 }} />

      <Grid container   
          spacing={4}
          alignItems="stretch"
          justifyContent="center">
        {/* 1: Image */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ width: "100%" }}
          >
            <Box
              component="img"
              loading="lazy"
              src={ab}
              alt="Gulmohar Grand"
              sx={{
                width: "100%",
                maxHeight: { xs: 350, md: 400 },
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.03)" },
              }}
            />
          </motion.div>
        </Grid>

        {/* 2: Description */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Stack spacing={2}>
            <AnimatedText variant="h5" fontWeight={600} sx={{ color: "#111" }}>
              Where Comfort Meets Elegance
            </AnimatedText>
            <AnimatedText variant="body1" sx={{ color: "#444", lineHeight: 1.9 }} delay={0.1}>
              Gulmohar Grand is a refined blend of modern luxury and warm
              hospitality, thoughtfully designed to create an exceptional stay
              experience. From stylish interiors to premium amenities, every
              detail reflects comfort, elegance, and care.
            </AnimatedText>
            <AnimatedText variant="body1" sx={{ color: "#444", lineHeight: 1.9 }} delay={0.2}>
              Whether you are visiting for business or leisure, we ensure
              personalized service, peaceful surroundings, and memorable moments
              that make every stay truly special.
            </AnimatedText>
            <AnimatedText
              sx={{ fontSize: "0.95rem", color: "#d4af37", fontWeight: 600 }}
              delay={0.3}
            >
              Experience comfort. Experience Gulmohar Grand.
            </AnimatedText>
          </Stack>
        </Grid>

        {/* 4: Description */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Stack spacing={2}>
            <AnimatedText variant="h5" fontWeight={600} sx={{ color: "#111" }}>
              Exquisite Dining Experience
            </AnimatedText>
            <AnimatedText variant="body1" sx={{ color: "#444", lineHeight: 1.9 }} delay={0.1}>
              Our in-house restaurant offers delicious cuisine crafted by expert
              chefs, blending local flavors with international dishes for a
              unique dining experience.
            </AnimatedText>
            <AnimatedText variant="body1" sx={{ color: "#444", lineHeight: 1.9 }} delay={0.2}>
              Enjoy a luxurious ambiance and attentive service that makes every
              meal memorable.
            </AnimatedText>
            <AnimatedText
              sx={{ fontSize: "0.95rem", color: "#d4af37", fontWeight: 600 }}
              delay={0.3}
            >
              Taste the excellence. Savor the comfort.
            </AnimatedText>
          </Stack>
        </Grid>

        {/* 3: Image */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ width: "100%" }}
          >
            <Box
              component="img"
              loading="lazy"
              src={dish}
              alt="Delicious Dish"
              sx={{
                width: "100%",
                maxHeight: { xs: 350, md: 400 },
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.03)" },
              }}
            />
          </motion.div>
        </Grid>

        {/* 5: Image */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ width: "100%" }}
          >
            <Box
              component="img"
              loading="lazy"
              src={drinks}
              alt="Refreshing Drinks"
              sx={{
                width: "100%",
                maxHeight: { xs: 350, md: 400 },
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.03)" },
              }}
            />
          </motion.div>
        </Grid>

        {/* 6: Description */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Stack spacing={2}>
            <AnimatedText variant="h5" fontWeight={600} sx={{ color: "#111" }}>
              Refreshing Beverages
            </AnimatedText>
            <AnimatedText variant="body1" sx={{ color: "#444", lineHeight: 1.9 }} delay={0.1}>
              Enjoy a variety of refreshing drinks, from freshly brewed coffees
              to exotic mocktails, perfect for relaxing or pairing with our
              exquisite dishes.
            </AnimatedText>
            <AnimatedText variant="body1" sx={{ color: "#444", lineHeight: 1.9 }} delay={0.2}>
              Our beverages are crafted to complement your dining and leisure
              experience.
            </AnimatedText>
            <AnimatedText
              sx={{ fontSize: "0.95rem", color: "#d4af37", fontWeight: 600 }}
              delay={0.3}
            >
              Sip. Savor. Enjoy.
            </AnimatedText>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
