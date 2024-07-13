import { NavLink, useLocation } from "react-router-dom";
import { LuMoonStar, LuSunMoon } from "react-icons/lu";
import { useAppDispatch, useAppSelector } from "@/store";
import { setTheme } from "@/store/slices/folioSlice";
import { useEffect } from "react";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.folioDetail);

  const location = useLocation();

  useEffect(() => {}, [location]);
  return (
    <header className="header flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <NavLink
        to="/"
        onClick={() => {
          dispatch(setTheme("light-theme"));
        }}
        className="flex justify-center items-center h-10 px-3 rounded-lg bg-white font-bold shadow-md"
      >
        <p className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
          Amaan Khatri
        </p>
      </NavLink>
      <nav className="flex items-center text-lg gap-7 font-medium mt-4 sm:mt-0">
        <NavLink
          to="/about"
          className={({ isActive }: any) => isActive && "text-blue-500"}
        >
          About
        </NavLink>
        {/* <NavLink
          to="/projects"
          className={({ isActive }: any) => isActive && "text-blue-500"}
        >
          Projects
        </NavLink> */}
        <NavLink
          to="/contact"
          className={({ isActive }: any) => isActive && "text-blue-500"}
        >
          Contact
        </NavLink>
        {location.pathname !== "/" && (
          <div className="cursor-pointer">
            {theme == "light-theme" ? (
              <LuMoonStar
                onClick={() => {
                  dispatch(setTheme("dark-theme"));
                }}
              />
            ) : (
              <LuSunMoon
                onClick={() => {
                  dispatch(setTheme("light-theme"));
                }}
              />
            )}
          </div>
        )}
      </nav>
    </header>
  );
};
