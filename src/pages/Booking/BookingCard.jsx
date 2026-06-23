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

const BookingCard = ({ room, selected, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        width: "100%",
        height: 300,
        borderRadius: 2,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        border: selected ? "3px solid #b8924c" : "3px solid transparent",
        boxShadow: selected ? "0 8px 24px rgba(184, 146, 76, 0.25)" : "0 4px 12px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        "&:hover .room-image": {
          transform: "scale(1.05)",
        },
        "&:hover .room-overlay": {
          background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
        },
      }}
    >
      {/* SELECTED BADGE */}
      {selected && (
        <Box
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            backgroundColor: "#b8924c",
            color: "#fff",
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            zIndex: 10,
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.05em",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          SELECTED
        </Box>
      )}
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
