import React from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const FilterBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const filterItems = [
    {
      label: "CHECK-IN / OUT",
      value: "Oct 24 — Oct 28",
      icon: <CalendarMonthIcon sx={{ fontSize: 18 }} />,
    },
    {
      label: "GUESTS",
      value: "02 Adults, 01 Suites",
      icon: <PersonOutlineIcon sx={{ fontSize: 18 }} />,
    },
    {
      label: "PREFERENCES",
      value: "Elite Memberships",
      icon: <StarBorderIcon sx={{ fontSize: 18 }} />,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1100px",
        mx: "auto",
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        backdropFilter: "blur(12px)",
        borderRadius: "999px",
        p: { xs: 2, md: 1 },
        pl: { md: 4 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        overflow: "hidden",
      }}
    >
      {filterItems.map((item, index) => (
        <React.Fragment key={item.label}>
          <Box
            sx={{
              flex: 1,
              py: 2,
              px: 3,
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
              width: "100%",
              textAlign: "left",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontFamily: "var(--font-nav)",
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.7)",
                display: "block",
                mb: 0.5,
                textTransform: "uppercase",
              }}
            >
              {item.label}
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box sx={{ color: "var(--color-accent)", display: "flex" }}>
                {item.icon}
              </Box>
              <Typography
                sx={{
                  fontFamily: "var(--font-nav)",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  color: "#fff",
                }}
              >
                {item.value}
              </Typography>
            </Stack>
          </Box>
          {index < filterItems.length - 1 && !isMobile && (
            <Divider orientation="vertical" flexItem sx={{ my: 2, borderColor: "rgba(255,255,255,0.2)" }} />
          )}
        </React.Fragment>
      ))}

      <Box sx={{ p: 1, width: { xs: "100%", md: "auto" } }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--color-accent)",
            color: "#000",
            borderRadius: "999px",
            px: 5,
            py: 2,
            minWidth: "220px",
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            height: "100%",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#fff",
              transform: "translateY(-2px)",
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            },
          }}
        >
          Search Availability
        </Button>
      </Box>
    </Box>
  );
};

export default FilterBar;
