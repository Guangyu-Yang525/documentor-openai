import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h1>This is NavBar</h1>
      <Outlet />
    </div>
  );
};

export default NavBar;
