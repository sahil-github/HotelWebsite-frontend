import React, { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import FilterModal from "./FilterModal";

const Filter = ({ onApplyFilters }) => {
  const [open, setOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (name, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApply = () => {
    onApplyFilters(selectedFilters);
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="Filter">
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            color: "#fff", 
            "&:hover": {
              color: "#f4c50b",
              backgroundColor: "transparent",
            },
          }}
        >
          <TuneIcon />
        </IconButton>
      </Tooltip>

      <FilterModal
        open={open}
        filters={selectedFilters}
        onChange={handleFilterChange}
        onClose={() => setOpen(false)}
        onApply={handleApply}
      />
    </>
  );
};

export default Filter;
