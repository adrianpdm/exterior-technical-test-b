import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../views/partials/navbar";

function Layout() {
  useEffect(() => {}, []);

  return (
    <>
      <Navbar />
      <div className="lg:container flex-auto lg:m-auto relative px-[1rem] py-[0.75rem]">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
