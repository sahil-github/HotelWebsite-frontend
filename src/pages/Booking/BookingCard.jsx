import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import StraightenIcon from "@mui/icons-material/Straighten";
import GroupIcon from "@mui/icons-material/Group";

const BookingCard = ({ room }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: 300,
        borderRadius: 0,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover .room-image": {
          transform: "scale(1.05)",
        },
        "&:hover .room-overlay": {
          background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
        },
      }}
    >
      {/* IMAGE */}
      <CardMedia
        component="img"
        image={room.image}
        alt={room.name}
        className="room-image"
        sx={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          transition: "transform 0.6s ease",
        }}
      />

      {/* OVERLAY */}
      <Box
        className="room-overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1))",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: 3,
          color: "#fff",
          transition: "background 0.3s ease",
        }}
      >
        <Typography
          variant="overline"
          sx={{
            fontFamily: "var(--font-nav)",
            letterSpacing: "0.2em",
            color: "var(--color-accent)",
            fontWeight: 600,
            mb: 0.5,
          }}
        >
          {room.size}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontFamily: "var(--font-logo)",
            fontWeight: 400,
            mb: 2,
            letterSpacing: "0.05em",
          }}
        >
          {room.name}
        </Typography>

        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" spacing={2} sx={{ opacity: 0.8 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <StraightenIcon sx={{ fontSize: 16 }} />
              <Typography variant="caption">{room.size}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <GroupIcon sx={{ fontSize: 16 }} />
              <Typography variant="caption">{room.capacity}</Typography>
            </Box>
          </Stack>

          <Box sx={{ textAlign: "right" }}>
            <Typography variant="caption" sx={{ display: "block", opacity: 0.7, textTransform: "uppercase" }}>
              Starting at
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "var(--font-nav)",
                fontWeight: 600,
                color: "var(--color-accent)",
              }}
            >
              {room.price}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
};

export default BookingCard;
