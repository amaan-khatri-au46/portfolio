import { NavLink } from "react-router-dom";
import { LuMoonStar, LuSunMoon } from "react-icons/lu";
import { useAppDispatch, useAppSelector } from "@/store";
import { setTheme } from "@/store/slices/folioSlice";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.folioDetail);
  return (
    <header className="header flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <NavLink
        to="/"
        // onClick={() => {
        //   dispatch(setTheme("light-theme"));
        // }}
        className="flex justify-center items-center h-10 px-3 rounded-lg bg-white font-bold shadow-md"
      >
        <p className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
          Amaan Khatri
        </p>
      </NavLink>
      <nav className="flex items-center text-lg gap-7 font-medium mt-4 sm:mt-0">
        <NavLink
          to="/about"
          className={({ isActive }: any) =>
            isActive
              ? "text-blue-500"
              : theme == "light-theme"
              ? "text-black-500"
              : "text-white"
          }
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
          className={({ isActive }: any) =>
            isActive
              ? "text-blue-500"
              : theme == "light-theme"
              ? "text-black-500"
              : "text-white"
          }
        >
          Contact
        </NavLink>
        <div>
          {theme == "light-theme" ? (
            <LuMoonStar
              onClick={() => {
                dispatch(setTheme("dark-theme"));
              }}
              className="cursor-pointer text-black-500"
            />
          ) : (
            <LuSunMoon
              onClick={() => {
                dispatch(setTheme("light-theme"));
              }}
              className="cursor-pointer text-white"
            />
          )}
        </div>
      </nav>
    </header>
  );
};
