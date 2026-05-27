import * as React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  TextField,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ForgotPassword = ({ open, handleClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
   
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit,
        sx: {
          borderRadius: 4,
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(18px)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" fontWeight={700}>
          Reset Password
        </Typography>

        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Divider />

      <DialogContent sx={{ mt: 2 }}>
        <Typography variant="body2" sx={{ mb: 2, color: "#333", opacity: 0.9 }}>
          Enter your registered email address and we’ll send you a password
          reset link.
        </Typography>

        <TextField
          autoFocus
          required
          fullWidth
          type="email"
          label="Email address"
          placeholder="Enter your email"
        />
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button onClick={handleClose} sx={{ color: "#555", fontWeight: 600 }}>
          Cancel
        </Button>

        <Button
          variant="contained"
          type="submit"
          sx={{
            px: 4,
            borderRadius: 3,
            fontWeight: 700,
            background: "linear-gradient(135deg, #7fffd4, #5ad9c7)",
            color: "#000",
            "&:hover": {
              background: "linear-gradient(135deg, #66e0c2, #4ccfb8)",
            },
          }}
        >
          Send Link
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ForgotPassword.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ForgotPassword;
