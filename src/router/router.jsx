import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import SeatLayout from "../pages/SeatLayout/SeatLayout";
import MyBookings from "../pages/MyBookings/MyBookings";
import Favorite from "../pages/Favorite/Favorite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route Not Found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/movies",
        element: <Movies></Movies>,
      },
      {
        path: "/movies/:id",
        element: <MovieDetails></MovieDetails>,
      },
      {
        path: "/movies/:id/:date",
        element: <SeatLayout></SeatLayout>,
      },
      {
        path: "/my-bookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "/favorite",
        element: <Favorite></Favorite>,
      },
    ],
  },
]);

export default router;
