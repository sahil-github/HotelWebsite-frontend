import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Divider, CircularProgress } from "@mui/material";
import AnimatedText from "../Components/AnimatedText";
import axiosInstance from "../service/axiosInstance";

const backendUrl = "http://localhost:5000";

const GalleryPhoto = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axiosInstance.get("/gallery");
        setImages(response.data);
      } catch (err) {
        console.error("Error fetching images:", err);
        setError("Failed to load gallery images.");
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  // Lazy load animation for images when they appear
  useEffect(() => {
    if (!loading && images.length > 0) {
      const imgs = document.querySelectorAll(".room-img");
      imgs.forEach((img, idx) => {
        img.style.opacity = 0;
        setTimeout(() => (img.style.opacity = 1), idx * 200);
      });
    }
  }, [loading, images]);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff",
        px: { xs: 2, md: 12 },
        pb: 4,
      }}
    >
      <AnimatedText
        variant="h4"
        fontWeight={700}
        sx={{ ml: 2, mt: 2, mb: 2, textAlign: "center" }}
      >
        GALLERY
      </AnimatedText>
      <Divider sx={{ mb: 4 }} />

      <Box sx={{ px: { xs: 2, md: 12 } }}>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" textAlign="center" mt={5}>
            {error}
          </Typography>
        ) : images.length === 0 ? (
          <Typography textAlign="center" mt={5} color="textSecondary">
            No images uploaded to the gallery yet.
          </Typography>
        ) : (
          <Grid container spacing={3} justifyContent="center" >
            {images.map((img, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={img._id || index}>
                <Box
                  component="img"
                  // Prepend backend URL to the relative imageUrl provided by DB
                  src={`${backendUrl}${img.imageUrl}`}
                  loading="lazy"
                  alt={img.title || `Gallery image ${index}`}
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
        )}
      </Box>
    </Box>
  );
};

export default GalleryPhoto;
