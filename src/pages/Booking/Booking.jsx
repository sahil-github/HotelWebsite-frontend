import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Grid,
  Container,
  Divider,
  InputAdornment,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleIcon from "@mui/icons-material/People";
import BookingCard from "./BookingCard";
import R4 from "../../assets/R4.JPG";
import R3 from "../../assets/R3.png";
import AnimatedText from "../../Components/AnimatedText";

const Booking = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // Prevent checkout before checkin
  useEffect(() => {
    if (checkOut && checkIn && checkOut <= checkIn) {
      setCheckOut("");
    }
  }, [checkIn]);

  const today = new Date().toISOString().split("T")[0];

  const rooms = [
    {
      name: "Deluxe Room",
      size: "35 sqm",
      capacity: "2 Adults",
      price: "₹3,500",
      image: R3,
      amenities: [
        "King / Twin Bed",
        "City View",
        "Free Wi-Fi",
        "Minibar",
        "Tea / Coffee",
      ],
    },
    {
      name: "Executive Room",
      size: "42 sqm",
      capacity: "3 Adults",
      price: "₹4,800",
      image: R4,
      amenities: ["King Bed", "Balcony", "Free Wi-Fi", "Breakfast Included"],
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff",
        pt: 12,
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* HEADER */}
        <AnimatedText 
          variant="h4" 
          fontWeight={700} 
          sx={{ ml: 2, mt: 2, textAlign: "center" }}
        >
          BOOK YOUR STAY
        </AnimatedText>
        <Divider sx={{ mb: 4 }} />
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          mb={2}
        >
          Select your dates and choose the perfect room
        </Typography>

        {/* BOOKING FORM */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            mb: 6,
            p: 3,
            backgroundColor: "#fff",
            borderRadius: 3,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <TextField
            label="Check-in"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            InputLabelProps={{ shrink: true }}
            inputProps={{ min: today }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarTodayIcon />
                </InputAdornment>
              ),
            }}
            sx={{ flex: 1, minWidth: 200 }}
          />

          <TextField
            label="Check-out"
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            InputLabelProps={{ shrink: true }}
            inputProps={{ min: checkIn || today }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarTodayIcon />
                </InputAdornment>
              ),
            }}
            sx={{ flex: 1, minWidth: 200 }}
          />

          <TextField
            select
            label="Adults"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PeopleIcon />
                </InputAdornment>
              ),
            }}
            sx={{ width: 150 }}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <MenuItem key={num} value={num}>
                {num}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Children"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PeopleIcon />
                </InputAdornment>
              ),
            }}
            sx={{ width: 150 }}
          >
            {[0, 1, 2, 3, 4].map((num) => (
              <MenuItem key={num} value={num}>
                {num}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* ROOMS */}
        <Typography variant="h5" fontWeight={700} mb={1} alignSelf={"center"}>
          Select Your Room
        </Typography>

        <Grid container spacing={4}>
          {rooms.map((room, index) => (
            <Grid item xs={12} md={6} key={index}>
              <BookingCard room={room} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Booking;
