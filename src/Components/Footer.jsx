import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(180deg, #1E1E1E 0%, #121212 100%)",
        color: "#fff",
        pt: 5,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* ABOUT */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              sx={{
                letterSpacing: 2,
                fontWeight: 700,
                mb: 1.5,
              }}
            >
              GULMOHAR GRAND
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.8,
                fontSize: "0.9rem",
              }}
            >
              A premium hotel in Nagpur offering elegant rooms, modern
              amenities, and warm hospitality for both business and leisure
              travelers.
            </Typography>
          </Grid>

          {/* QUICK LINKS */}
          {/* <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ mb: 1.5, fontWeight: 600 }}
            >
              Quick Links
            </Typography>

            {["Home", "About", "Rooms", "Contact"].map((item) => (
              <Typography key={item} mb={0.8}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.65)",
                    transition: "0.3s",
                    "&:hover": {
                      color: "#f4c50b 💛",
                      paddingLeft: "4px",
                    },
                  }}
                >
                  {item}
                </Link>
              </Typography>
            ))}
          </Grid> */}

          {/* CONTACT */}
          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 600 }}>
              Contact
            </Typography>

            {[
              "Nagpur, Maharashtra",
              "+91 9209861027",
              "hotelgulmoharbar2024@gmail.com",
            ].map((text) => (
              <Typography
                key={text}
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.65)",
                  mb: 0.8,
                  fontSize: "0.9rem",
                }}
              >
                {text}
              </Typography>
            ))}
          </Grid>

          {/* SOCIAL */}
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 600 }}>
              Follow Us
            </Typography>

            <Box>
              {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon].map(
                (Icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      color: "#aaa",
                      mr: 1,
                      border: "1px solid #333",
                      transition: "0.3s",
                      "&:hover": {
                        color: "#f4c50b",
                        borderColor: "#f4c50b",
                        transform: "translateY(-3px)",
                      },
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                ),
              )}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "#2c2c2c" }} />

        <Typography
          variant="body2"
          align="center"
          sx={{
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.5)",
            letterSpacing: 0.5,
          }}
        >
          © {new Date().getFullYear()} Gulmohar Grand. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
