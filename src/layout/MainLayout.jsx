import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  // const isAdminRoute = useLocation().pathname.startsWith("/admin");
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer /> 
    </>
  );
};

export default MainLayout;
