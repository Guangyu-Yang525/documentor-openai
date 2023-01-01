import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import NavButton from "../components/navbar-button-component";

/**
 * This component should access to the user state stored in context
 * and conditionally rendering the user info component and login/logout button
 * based on the value of user state
 * @returns
 *
 */
const NavBar = () => {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => setDropdown(!dropdown);
  const nagivateToAuth = () => navigate("/auth");

  return (
    <div className="w-screen flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-full container flex flex-wrap items-center justify-between px-2 md:px-5">
        <Link to={"/"}>
          <div className="text-3xl dark:text-gray-50">Documentor</div>
        </Link>
        <div className="flex md:order-2">
          <button
            onClick={nagivateToAuth}
            className="text-gray-100 rounded bg-sky-500 hover:bg-sky-600 px-3 py-1"
          >
            Login
          </button>
          <NavButton onClick={toggleDropdown} />
        </div>
        <div
          className={`${dropdown ? "" : "hidden"} w-full md:block md:w-auto`}
        >
          <div className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Link to={"/"} className="dark:text-gray-50 text-lg hover:underline">
              Home
            </Link>
            <Link to={"/about"} className="dark:text-gray-50 text-lg hover:underline">
              About
            </Link>
            <Link to={"/func"} className="dark:text-gray-50 text-lg hover:underline">
              Features
            </Link>
            <Link to={"/documents"} className="dark:text-gray-50 text-lg hover:underline">
              Documents
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
