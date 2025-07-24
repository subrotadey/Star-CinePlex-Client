import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import SeatLayout from "../pages/SeatLayout/SeatLayout";
import MyBookings from "../pages/MyBookings/MyBookings";
import Favorite from "../pages/Favorite/Favorite";
import DisplayError from "../pages/DisplayError/DisplayError";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import AddShows from "../pages/Admin/AddShows/AddShows";
import ListShows from "../pages/Admin/ListShows/ListShows";
import ListBookings from "../pages/Admin/ListBookings/ListBookings";

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
  {
    path: "/admin/*",
    element: <DashboardLayout />,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "add-shows",
        element: <AddShows />,
      },
      {
        path: "list-shows",
        element: <ListShows />,
      },
      {
        path: "list-bookings",
        element: <ListBookings />,
      },
    ],
  },
]);

export default router;
