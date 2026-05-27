import { createBrowserRouter } from "react-router-dom";

import AuthGuard from "./Authguard";
import PublicGuard from "./Publicguard";

import AuthLayout from "../Layouts/AuthLayout";
import MainLayout from "../Layouts/MainLayout";

import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Rooms from "../pages/Rooms";
import Amenities from "../pages/Amenities/Amenities";
import Gallery from "../pages/GalleryPhoto";
import Booking from "../pages/Booking/Booking";

export const router = createBrowserRouter([
  // =========================
  // AUTH ROUTES
  // =========================
  {
    element: <PublicGuard />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/signin",
            element: <SignIn />,
          },
          {
            path: "/signup",
            element: <SignUp />,
          },
        ],
      },
    ],
  },

  // =========================
  // PUBLIC ROUTES
  // =========================
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/amenities",
        element: <Amenities />,
      },
      {
        path: "/galleryphoto",
        element: <Gallery />,
      },
    ],
  },

  // =========================
  // PRIVATE ROUTES
  // =========================
  {
    element: <AuthGuard />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/booking",
            element: <Booking />,
          },
        ],
      },
    ],
  },
]);