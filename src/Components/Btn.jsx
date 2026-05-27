import React from 'react'
import { Button } from '@mui/material'

const Btn = ({ name, color, onhover, component, to, bgcolor }) => {
  return (
    <Button component={component} to={to}
      type="submit"
      variant="contained"
      size="large"
      sx={{
        mt: 2,
        px: 4,
        borderRadius: 2,
        color: { color },
        backgroundColor: bgcolor || "#d32f2f",
        "&:hover": { bgcolor: onhover || "#b71c1c" },
      }}
    >
      {name}
    </Button>
  )
}

export default Btn