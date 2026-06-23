import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Grid,
  Divider,
  InputAdornment,
  Button,
  CircularProgress,
  Paper,
  Card,
  CardMedia,
  Stack,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleIcon from "@mui/icons-material/People";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";

import BookingCard from "./BookingCard";
import AnimatedText from "../../Components/AnimatedText";
import useGalleryImages from "../../hooks/useGalleryImages";
import axiosInstance from "../../service/axiosInstance";

const Booking = () => {
  const { imageMap } = useGalleryImages();
  const [step, setStep] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Step 2 Guest Details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successData, setSuccessData] = useState(null);

  // Pre-fill user data if logged in
  useEffect(() => {
    try {
      const userStr = localStorage.getItem("user");
      if (userStr) {
        const user = JSON.parse(userStr);
        if (user.name) setName(user.name);
        if (user.email) setEmail(user.email);
        if (user.phone) setPhone(user.phone);
      }
    } catch (e) {
      console.error("Error reading user details", e);
    }
  }, []);

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
      image: imageMap["R3"],
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
      image: imageMap["R4"],
      amenities: ["King Bed", "Balcony", "Free Wi-Fi", "Breakfast Included"],
    },
  ];

  // Calculations for Summary
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const diffTime = Math.abs(new Date(checkOut) - new Date(checkIn));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const calculateTotalPrice = (room) => {
    if (!room) return 0;
    const nights = calculateNights();
    const priceNum = parseInt(room.price.replace(/[^\d]/g, ""), 10);
    return priceNum * (nights || 1);
  };

  const formatPrice = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleNextStep = () => {
    if (step === 1 && (!checkIn || !checkOut || !selectedRoom)) {
      setError("Please select check-in, check-out dates and choose a room.");
      return;
    }
    setError("");
    setStep(2);
  };

  const handlePrevStep = () => {
    setError("");
    setStep(1);
  };

  const handleConfirmBooking = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setError("Please fill in your name, email, and phone number.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const response = await axiosInstance.post("/booking", {
        name,
        email,
        phone,
        checkInDate: checkIn,
        checkOutDate: checkOut,
        noOfGuests: Number(adults) + Number(children),
        room: selectedRoom.name,
      });

      if (response.data.success) {
        setSuccessData(response.data.booking);
        setStep(3);
      } else {
        setError(response.data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Failed to make booking. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setCheckIn("");
    setCheckOut("");
    setSelectedRoom(null);
    setSuccessData(null);
    setError("");
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fcfbfc",
        px: { xs: 2, md: 12 },
        pb: 8,
        pt: 4,
      }}
    >
      {/* HEADER */}
      <AnimatedText
        variant="h4"
        fontWeight={700}
        sx={{ mb: 2, textAlign: "center", fontFamily: "var(--font-logo)" }}
      >
        {step === 1 && "BOOK YOUR STAY"}
        {step === 2 && "CONFIRM YOUR BOOKING"}
        {step === 3 && "BOOKING SUCCESSFUL"}
      </AnimatedText>
      <Divider sx={{ mb: 4, width: "100px", mx: "auto", borderBottomWidth: 3, borderColor: "#b8924c" }} />

      {error && (
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 4,
            backgroundColor: "#fde8e8",
            border: "1px solid #f8b4b4",
            borderRadius: 2,
            color: "#9b1c1c",
            textAlign: "center",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          {error}
        </Paper>
      )}

      {/* STEP 1: ROOMS & DATES */}
      {step === 1 && (
        <Box>
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
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
              border: "1px solid #f0edf0",
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
                    <CalendarTodayIcon sx={{ color: "#b8924c" }} />
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
                    <CalendarTodayIcon sx={{ color: "#b8924c" }} />
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
                    <PeopleIcon sx={{ color: "#b8924c" }} />
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
                    <PeopleIcon sx={{ color: "#b8924c" }} />
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
          <Typography
            variant="h5"
            fontWeight={600}
            mb={3}
            textAlign="center"
            sx={{ letterSpacing: "0.05em" }}
          >
            Select Your Room
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {rooms.map((room, index) => (
              <Grid item xs={12} md={6} key={index}>
                <BookingCard
                  room={room}
                  selected={selectedRoom?.name === room.name}
                  onClick={() => setSelectedRoom(room)}
                />
              </Grid>
            ))}
          </Grid>

          {/* ACTION BUTTON */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleNextStep}
              endIcon={<ArrowForwardIcon />}
              disabled={!checkIn || !checkOut || !selectedRoom}
              sx={{
                backgroundColor: "#b8924c",
                color: "#fff",
                px: 5,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600,
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "#a07c3d",
                },
                boxShadow: "0 4px 15px rgba(184, 146, 76, 0.3)",
              }}
            >
              Continue to Guest Details
            </Button>
          </Box>
        </Box>
      )}

      {/* STEP 2: GUEST DETAILS & CONFIRMATION */}
      {step === 2 && (
        <Grid container spacing={5} sx={{ maxWidth: "1200px", mx: "auto" }}>
          {/* LEFT: SUMMARY */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: "#fff",
                border: "1px solid #f0edf0",
                boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
              }}
            >
              <Typography variant="h6" fontWeight={600} mb={2} color="#b8924c">
                Booking Summary
              </Typography>
              <Divider sx={{ mb: 3 }} />

              {selectedRoom && (
                <Box>
                  <CardMedia
                    component="img"
                    image={selectedRoom.image}
                    alt={selectedRoom.name}
                    sx={{ height: 160, borderRadius: 2, mb: 2, objectFit: "cover" }}
                  />
                  <Typography variant="h6" fontWeight={500} mb={1}>
                    {selectedRoom.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={3}>
                    {selectedRoom.size} • {selectedRoom.capacity}
                  </Typography>

                  <Stack spacing={2} sx={{ mb: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body2" color="text.secondary">Check-In</Typography>
                      <Typography variant="body2" fontWeight={500}>{checkIn}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body2" color="text.secondary">Check-Out</Typography>
                      <Typography variant="body2" fontWeight={500}>{checkOut}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body2" color="text.secondary">Nights</Typography>
                      <Typography variant="body2" fontWeight={500}>{calculateNights()}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body2" color="text.secondary">Guests</Typography>
                      <Typography variant="body2" fontWeight={500}>
                        {adults} Adults {children > 0 && `, ${children} Children`}
                      </Typography>
                    </Box>
                  </Stack>

                  <Divider sx={{ mb: 2 }} />

                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="subtitle1" fontWeight={600}>Total Price</Typography>
                    <Typography variant="h6" fontWeight={700} color="#b8924c">
                      {formatPrice(calculateTotalPrice(selectedRoom))}
                    </Typography>
                  </Box>
                </Box>
              )}
            </Paper>
          </Grid>

          {/* RIGHT: DETAILS FORM */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: "#fff",
                border: "1px solid #f0edf0",
                boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
              }}
            >
              <Typography variant="h6" fontWeight={600} mb={3}>
                Guest Information
              </Typography>

              <form onSubmit={handleConfirmBooking}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      label="Full Name"
                      fullWidth
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon sx={{ color: "#b8924c" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Email Address"
                      type="email"
                      fullWidth
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon sx={{ color: "#b8924c" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Phone Number"
                      type="tel"
                      fullWidth
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon sx={{ color: "#b8924c" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sx={{ mt: 2, display: "flex", gap: 2 }}>
                    <Button
                      variant="outlined"
                      onClick={handlePrevStep}
                      startIcon={<ArrowBackIcon />}
                      disabled={loading}
                      sx={{
                        flex: 1,
                        py: 1.5,
                        borderRadius: 2,
                        borderColor: "#ccc",
                        color: "#666",
                        "&:hover": { borderColor: "#999", backgroundColor: "#fafafa" },
                      }}
                    >
                      Back
                    </Button>

                    <Button
                      type="submit"
                      variant="contained"
                      disabled={loading}
                      sx={{
                        flex: 2,
                        py: 1.5,
                        borderRadius: 2,
                        backgroundColor: "#b8924c",
                        color: "#fff",
                        fontWeight: 600,
                        "&:hover": {
                          backgroundColor: "#a07c3d",
                        },
                        boxShadow: "0 4px 15px rgba(184, 146, 76, 0.3)",
                      }}
                    >
                      {loading ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        "Confirm & Book"
                      )}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      )}

      {/* STEP 3: SUCCESS */}
      {step === 3 && successData && (
        <Paper
          elevation={0}
          sx={{
            p: 5,
            borderRadius: 4,
            backgroundColor: "#fff",
            border: "1px solid #f0edf0",
            boxShadow: "0 15px 40px rgba(0,0,0,0.04)",
            maxWidth: "600px",
            mx: "auto",
            textAlign: "center",
          }}
        >
          <CheckCircleOutlineIcon sx={{ fontSize: 72, color: "#2e7d32", mb: 2 }} />
          <Typography variant="h5" fontWeight={700} mb={1}>
            Thank you, {successData.name}!
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            Your booking has been successfully confirmed.
          </Typography>

          <Paper
            variant="outlined"
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: "#fafafb",
              textAlign: "left",
              mb: 4,
            }}
          >
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              BOOKING DETAILS
            </Typography>
            <Grid container spacing={1.5} sx={{ mt: 1 }}>
              <Grid item xs={6}>
                <Typography variant="caption" color="text.secondary">ROOM TYPE</Typography>
                <Typography variant="body2" fontWeight={600}>{successData.room}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="caption" color="text.secondary">TOTAL GUESTS</Typography>
                <Typography variant="body2" fontWeight={600}>{successData.noOfGuests}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="caption" color="text.secondary">CHECK-IN</Typography>
                <Typography variant="body2" fontWeight={600}>
                  {new Date(successData.checkInDate).toLocaleDateString("en-IN", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="caption" color="text.secondary">CHECK-OUT</Typography>
                <Typography variant="body2" fontWeight={600}>
                  {new Date(successData.checkOutDate).toLocaleDateString("en-IN", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          <Button
            variant="contained"
            onClick={resetForm}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              backgroundColor: "#b8924c",
              color: "#fff",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#a07c3d",
              },
            }}
          >
            Book Another Stay
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default Booking;
