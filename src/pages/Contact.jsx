import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Divider,
  Snackbar,
  Alert,
  Box,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Btn from "../Components/Btn";
import { Formik } from "formik";
import ContactValidationSchema from "../Validation/ContactSchema";
import AnimatedText from "../Components/AnimatedText";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("contactMessages")) || [];
    console.log("Saved messages:", saved);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff",
        px: { xs: 2, md: 12 },
        pt: 12,
        pb: 8,
      }}
    >
      <AnimatedText 
        variant="h4" 
        fontWeight={700} 
        sx={{ ml: 2, mt: 2, textAlign: "center" }}
      >
        CONTACT US
      </AnimatedText>

      <Divider sx={{ mb: 6 }} />

      <Grid container spacing={4} sx={{ px: { xs: 2, md: 12 } }}>
        {/* LEFT SIDE */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container direction="column" spacing={4}>

            <Box display="flex" gap={2}>
              <LocationOnIcon color="error" />
              <Box>
                <Typography fontWeight={600}>ADDRESS</Typography>
                <Typography variant="body2">
                  Plot No.14, Panjari Road, Nagpur, India
                </Typography>
              </Box>
            </Box>

            <Box display="flex" gap={2}>
              <PhoneIcon color="error" />
              <Box>
                <Typography fontWeight={600}>PHONE & EMAIL</Typography>
                <Typography variant="body2">+91-9209861027</Typography>
                <Typography variant="body2">
                  hotelgulmoharbar2024@gmail.com
                </Typography>
              </Box>
            </Box>

            <Box display="flex" gap={2} direction>
              <AccessTimeIcon color="error" />
              <Box>
                <Typography fontWeight={600}>WORKING TIME</Typography>
                <Typography variant="body2">24 Hours</Typography>
              </Box>
            </Box>


            <Grid>
              <iframe
                title="map"
                src="https://maps.google.com/maps?hl=en&q=gulmohar%20grand%20nagpur&z=14&output=embed"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: 8 }}
                loading="lazy"
              />
            </Grid>
          </Grid>
        </Grid>

        {/* RIGHT FORM */}
        <Grid size={{ xs: 12, md: 6 }}>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              phone: "",
              email: "",
              city: "",
              country: "",
              comments: "",
            }}
            ContactvalidationSchema={ContactValidationSchema}
            onSubmit={(values, { resetForm }) => {
              const existing =
                JSON.parse(localStorage.getItem("contactMessages")) || [];
              existing.push(values);
              localStorage.setItem("contactMessages", JSON.stringify(existing));

              setSuccess(true);
              resetForm();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.firstName && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                        required
                      />

                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.phone && Boolean(errors.phone)}
                        helperText={touched.phone && errors.phone}
                        required
                      />

                      <TextField
                        fullWidth
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.city && Boolean(errors.city)}
                        helperText={touched.city && errors.city}
                        required
                      />
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.lastName && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                        required
                      />

                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        required
                      />

                      <TextField
                        fullWidth
                        label="Country"
                        name="country"
                        value={values.country}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.country && Boolean(errors.country)}
                        helperText={touched.country && errors.country}
                        required
                      />
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Comments"
                      name="comments"
                      value={values.comments}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.comments && Boolean(errors.comments)}
                      helperText={touched.comments && errors.comments}
                      required
                    />
                  </Grid>

                  <Grid
                    size={{ xs: 12 }}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Btn name="Send" />
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Grid>
      </Grid>

      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
      >
        <Alert severity="success" variant="filled">
          Message saved locally!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
