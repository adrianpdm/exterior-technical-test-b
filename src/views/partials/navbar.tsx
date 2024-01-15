import { Link } from "react-router-dom";
import { IconArrowLeft } from "../../components/icons";

function Navbar() {
  return (
    <>
      <nav className="mx-auto px-[1rem] bg-white dark:bg-gray-900 fixed w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600 z-50">
        <div className="container h-[4rem] max-w-screen flex items-center">
          <Link to="/">
            <img
              src="https://wisata.app/img/logo.png"
              className="hidden lg:block h-[42px]"
            />
          </Link>
          <Link to="/" className="block lg:hidden h-[36px]">
            <IconArrowLeft fill="#1a73e8" height={36} width={36} />
          </Link>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          ></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
