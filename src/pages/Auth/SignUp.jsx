import * as React from "react";
import {
  Box,
  Button,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Checkbox,
  TextField,
  Typography,
  Card as MuiCard,
  Link,
  Alert,
  Collapse,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import authApi from "../../service/authApi";

const Card = styled(MuiCard)({
  width: "100%",
  maxWidth: 420,
  padding: "32px 28px",
  borderRadius: "24px",
  display: "flex",
  flexDirection: "column",
  gap: 14,

  background: "rgba(255, 255, 255, 0.08)",
  backgroundImage: "linear-gradient(to bottom right, rgba(255,255,255,0.10), rgba(255,255,255,0.03))",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.18)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
  overflow: "hidden",
  position: "relative",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "24px",
    padding: "1px",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    pointerEvents: "none",
  },
});

const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 12,
    background: "rgba(255,255,255,0.06)",
    color: "#fff",

    "& fieldset": {
      border: "1px solid rgba(255,255,255,0.15)",
    },

    "&:hover fieldset": {
      border: "1px solid rgba(255,255,255,0.35)",
    },

    "&.Mui-focused fieldset": {
      border: "1px solid #7fffd4",
    },

    "& input": {
      padding: "14px",
      fontSize: 15,
      color: "#fff",
    },
  },

  "& .MuiFormHelperText-root": {
    color: "#ffb4b4",
    marginLeft: 2,
  },

  "& input::placeholder": {
    color: "rgba(255,255,255,0.7)",
    opacity: 1,
  },
};

// ✅ Yup Validation Schema
const validationSchema = Yup.object({
  name: Yup.string().trim().required("Full name is required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters required")
    .required("Password is required"),
});

export default function SignUp() {
  const navigate = useNavigate();
  const [apiError, setApiError] = React.useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      updates: false,
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setApiError("");
      try {
        const response = await authApi.signup({
          name: values.name.trim(),
          email: values.email.trim(),
          password: values.password,
        });

        if (response.data) {
          navigate("/signin", { 
            state: { 
              message: "Account created successfully! Please sign in with your credentials.",
              email: values.email.trim()
            } 
          });
        } else {
          setApiError("Registration failed. Please try again.");
        }
      } catch (err) {
        console.error("Signup error:", err);
        const errMsg = err.response?.data?.message || "Registration failed. Please check your connection.";
        setApiError(errMsg);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 6,
          px: 2,
        }}
      >
        {" "}
        <CssBaseline />
        <Card>
          <Typography
            variant="h4"
            fontWeight={700}
            textAlign="center"
            sx={{
              color: "#fff",
            }}
          >
            Sign Up
          </Typography>

          <Typography
            variant="body2"
            textAlign="center"
            sx={{
              color: "rgba(255,255,255,0.75)",
              mb: 1,
            }}
          >
            Join <strong>Gulmohar Grand</strong> and start your journey
          </Typography>

          <Collapse in={Boolean(apiError)} sx={{ width: "100%", mt: 1 }}>
            <Alert
              severity="error"
              onClose={() => setApiError("")}
              sx={{
                borderRadius: "12px",
                backgroundColor: "rgba(211, 47, 47, 0.2)",
                color: "#ffcdd2",
                border: "1px solid rgba(211, 47, 47, 0.4)",
                "& .MuiAlert-icon": {
                  color: "#ff8a80"
                },
                "& .MuiSvgIcon-root": {
                  color: "#ffcdd2"
                }
              }}
            >
              {apiError}
            </Alert>
          </Collapse>

          <Box component="form" onSubmit={formik.handleSubmit} mt={1}>
            <FormControl fullWidth margin="normal">
              <TextField
                name="name"
                placeholder="Full name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                sx={textFieldStyles}
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <TextField
                name="email"
                placeholder="Email address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={textFieldStyles}
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <TextField
                name="password"
                type="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                sx={textFieldStyles}
              />
            </FormControl>

            <FormControlLabel
              sx={{
                color: "rgba(255,255,255,0.8)",
                mt: 1,
              }}
              control={
                <Checkbox
                  name="updates"
                  checked={formik.values.updates}
                  onChange={formik.handleChange}
                  sx={{
                    color: "rgba(255,255,255,0.6)",

                    "&.Mui-checked": {
                      color: "#7fffd4",
                    },
                  }}
                />
              }
              label="I want to receive updates via email"
            />

            <Button
              type="submit"
              fullWidth
              disabled={formik.isSubmitting}
              sx={{
                mt: 3,
                py: 1.5,
                borderRadius: "999px",
                fontWeight: 700,
                fontSize: 16,
                textTransform: "none",

                background: "linear-gradient(135deg, #7fffd4, #d5d95a)",

                color: "#000",

                boxShadow: "0 8px 20px rgba(127,255,212,0.35)",

                "&:hover": {
                  background: "linear-gradient(135deg, #66e0c2, #bfc74d)",
                },
                "&:disabled": {
                  background: "rgba(255, 255, 255, 0.12)",
                  color: "rgba(255, 255, 255, 0.3)",
                  boxShadow: "none"
                }
              }}
            >
              {formik.isSubmitting ? (
                <CircularProgress size={24} sx={{ color: "#000" }} />
              ) : (
                "Sign Up"
              )}
            </Button>
          </Box>

          <Typography
            textAlign="center"
            fontSize={14}
            sx={{
              color: "rgba(255,255,255,0.75)",
            }}
          >
            Already have an account?{" "}
            <Link
              component={RouterLink}
              to="/signin"
              underline="hover"
              sx={{
                color: "#7fffd4",
                fontWeight: 600,
              }}
            >
              Sign In
            </Link>
          </Typography>
        </Card>
      </Box>
    </>
  );
}
