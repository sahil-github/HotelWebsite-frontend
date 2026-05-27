import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const AmenityCard = ({ icon, title, desc }) => {
  return (
    <Box
      sx={{
        width: "100%",
        p: 2,
        textAlign: "center",
        backgroundColor: "",
        border: "1px solid rgba(0,0,0,0.03)",
        borderRadius: "20px",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        height: "50%",
        "&:hover": {
          backgroundColor: "#fff",
          transform: "translateY(-5px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.1)",
        },
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Box
          sx={{
            fontSize: 40,
            display: "flex",
            justifyContent: "center",
            opacity: 0.9,
          }}
        >
          {icon}
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
            my: 1
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "rgba(0,0,0,0.6)",
            fontWeight: 300,
            py: 1
          }}
        >
          {desc}
        </Typography>
      </Stack>
    </Box>
  );
};

export default AmenityCard;
