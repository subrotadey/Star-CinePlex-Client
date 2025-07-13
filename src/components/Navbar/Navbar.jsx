import { Link, NavLink, useNavigate } from "react-router-dom";
import { image } from "../../data/image";
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from "lucide-react";
import { useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useClerk,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();

  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-6 lg:px-36 py-5">
      <Link to="/" className="max-md:flex-1">
        <img src={image.logo} alt="" className="w-36 h-auto" />
      </Link>
      <div
        className={`${
          isOpen ? "max-md:w-full" : "max-md:w-0"
        } max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300`}
      >
        <XIcon
          onClick={() => {
            setOpen(!isOpen);
          }}
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
        ></XIcon>
        <NavLink
          onClick={() => {
            scrollTo(0, 0);
            setOpen(false);
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => {
            scrollTo(0, 0);
            setOpen(false);
          }}
          to="/movies"
        >
          Movies
        </NavLink>
        <NavLink
          onClick={() => {
            scrollTo(0, 0);
            setOpen(false);
          }}
          to="/theater"
        >
          Theaters
        </NavLink>
        <NavLink
          onClick={() => {
            scrollTo(0, 0);
            setOpen(false);
          }}
          to="/releases"
        >
          Releases
        </NavLink>
        <NavLink
          onClick={() => {
            scrollTo(0, 0);
            setOpen(false);
          }}
          to="/favorite"
        >
          Favorites
        </NavLink>
      </div>
      <div className="flex items-center gap-8">
        <SearchIcon className="max-md:hidden w-6 h-6 cursor-pointer"></SearchIcon>
        {!user ? (
          <button
            onClick={openSignIn}
            className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
          >
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<TicketPlus width={15} />}
                onClick={() => navigate("/my-bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>
      <MenuIcon
        onClick={() => setOpen(!isOpen)}
        className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
      ></MenuIcon>
    </div>
  );
};

export default Navbar;
