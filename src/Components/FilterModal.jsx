
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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const FilterModal = ({ open, filters, onChange, onClose, onApply }) => {
  const handleClear = () => {
    onChange("checkIn", null);
    onChange("checkOut", null);
    onChange("price", "");
    onChange("guests", "");
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: 4,
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(18px)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        },
      }}
    >
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight={700}>
          Filters
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Divider />

      <DialogContent sx={{ mt: 2 }}>
        <Box display="flex" gap={2} mb={2}>
          <DatePicker
            label="Check-in"
            value={filters.checkIn || null}
            onChange={(value) => onChange("checkIn", value)}
            disablePast
            slotProps={{ textField: { fullWidth: true } }}
          />

          <DatePicker
            label="Check-out"
            value={filters.checkOut || null}
            minDate={filters.checkIn}
            onChange={(value) => onChange("checkOut", value)}
            disabled={!filters.checkIn}
            slotProps={{ textField: { fullWidth: true } }}
          />
        </Box>

        <TextField
          label="Max Price (₹)"
          fullWidth
          type="number"
          value={filters.price || ""}
          onChange={(e) => onChange("price", e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Guests"
          fullWidth
          type="number"
          value={filters.guests || ""}
          onChange={(e) => onChange("guests", e.target.value)}
        />
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button onClick={handleClear} sx={{ color: "#555", fontWeight: 600 }}>
          Clear
        </Button>

        <Button
          variant="contained"
          onClick={onApply}
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
          Apply Filters
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FilterModal;
