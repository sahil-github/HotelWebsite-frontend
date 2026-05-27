import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Stack } from "@mui/material";

const FilterFields = ({ filters, onChange }) => {
  return (
    <Stack spacing={2}>
      <DatePicker
        label="Check-in"
        value={filters.checkIn || null}
        onChange={(value) => onChange("checkIn", value)}
        disablePast
      />

      <DatePicker
        label="Check-out"
        value={filters.checkOut || null}
        minDate={filters.checkIn}
        onChange={(value) => onChange("checkOut", value)}
        disabled={!filters.checkIn}
      />
    </Stack>
  );
};

export default FilterFields;
