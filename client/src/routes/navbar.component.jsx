import { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import DarkModeToggle from "../components/darkmodetoggle.component";
import Footer from "../components/footer.component";
import NavButton from "../components/navbar-button-component";
import Profile from "../components/navbar-profile.component";
import { UserContext } from "../contexts/user.context";

/**
 * @author Guangyu Yang
 * This component should access to the user state stored in context
 * and conditionally rendering the user info component and login/logout button
 * based on the value of user state
 * @returns
 *
 */
const NavBar = () => {
  const navigate = useNavigate();
  const { authenticated, setAuthenticated } = useContext(UserContext);
  const [dropdown, setDropdown] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleProfileDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleDropdown = () => setDropdown(!dropdown);
  const nagivateToAuth = () => navigate("/login");
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
  const logout = () => {
    setIsDropdownOpen(false);
    setAuthenticated(false);
    localStorage.removeItem("access_token");
  };

  useEffect(() => {
    mode === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [mode]);

  return (
    <div className="w-screen flex flex-col h-screen bg-white dark:bg-gray-900 overflow-scroll">
      <div className="min-h-72 max-w-full container flex flex-wrap items-center justify-between px-2 md:px-5">
        <Link to={"/"}>
          <span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r to-red-500 from-sky-400">
            Documentor
          </span>{" "}
        </Link>
        <div className="flex md:order-2">
          <DarkModeToggle mode={mode} onClick={toggleMode} />
          {authenticated ? (
            <Profile toggleHandler={toggleProfileDropdown} />
          ) : (
            <button
              onClick={nagivateToAuth}
              className="text-gray-100 rounded bg-sky-500 hover:bg-sky-600 px-3 py-1 mr-3"
            >
              Login
            </button>
          )}
          <NavButton onClick={toggleDropdown} />
        </div>
        <div
          className={`${dropdown ? "" : "hidden"} w-full md:block md:w-auto`}
        >
          <div className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-300 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Link
              to={"/"}
              className="dark:text-gray-50 text-lg hover:underline"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="dark:text-gray-50 text-lg hover:underline"
            >
              About
            </Link>
            <Link
              to={"/func"}
              className="dark:text-gray-50 text-lg hover:underline"
            >
              Features
            </Link>
            <Link
              to={"/documents"}
              className="dark:text-gray-50 text-lg hover:underline"
            >
              Documents
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          isDropdownOpen ? "" : "hidden"
        } z-50 w-36 bg-white top-12 right-0 absolute divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
      >
        <button className="w-full hover:bg-gray-500" onClick={logout}>
          Log out
        </button>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default NavBar;
