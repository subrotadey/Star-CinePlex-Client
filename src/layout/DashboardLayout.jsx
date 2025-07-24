import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/Admin/AdminNavbar/AdminNavbar";
import AdminSideBar from "../components/Admin/AdminSideBar/AdminSideBar";

const DashboardLayout = () => {
  return (
    <>
      <AdminNavbar />
      <div className="flex">
        <AdminSideBar />
        <div className="flex-1 px-4 py-10 md:px-10 h-[calc(100vh-64px)] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
