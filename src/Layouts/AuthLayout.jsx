import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import InputBG from "../assets/login.png";

const AuthLayout = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${InputBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};

export default AuthLayout;
