import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../views/partials/navbar";
import { DesktopChecker } from "../helper";

function Layout() {
  const deviceType = DesktopChecker();
  useEffect(() => {}, []);

  return (
    <>
      <Navbar />
      <div
        className={`flex-auto lg:m-auto relative px-[1rem] py-[0.75rem] ${
          deviceType === "desktop" && "container"
        }`}
      >
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
