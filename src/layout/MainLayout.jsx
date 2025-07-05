import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");
  return (
    <>
      {isAdminRoute && <Navbar />}
      <Outlet></Outlet>
      {isAdminRoute && <Footer />}
    </>
  );
};

export default MainLayout;
