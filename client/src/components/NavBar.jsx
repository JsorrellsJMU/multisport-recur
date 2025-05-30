import { useState } from "react";
import logo from '../assets/5.png';

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const isAuthenticated = false;

  const links = ["Home", "Resources", "Athletes", "Shop", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-900 text-white shadow-md">
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between px-4 h-25">
          {/* Logo */}
          <div className="w-40 lg:w-52 flex items-center">
            <a href="/" className="block">
              <img
                src={logo}
                alt="Multi Sport Recur Logo"
                className="h-24 object-contain mt-3"
              />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className={`lg:hidden z-50 flex flex-col items-end justify-center space-y-1 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              navbarOpen ? "scale-90" : ""
            }`}
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                navbarOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
                navbarOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                navbarOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>

          {/* Nav Links */}
          <nav
            className={`${
              navbarOpen ? "block" : "hidden"
            } absolute top-full right-4 w-[250px] rounded bg-zinc-800 shadow-lg px-6 py-4 lg:static lg:block lg:w-auto lg:bg-transparent lg:shadow-none`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center gap-y-4 lg:gap-x-12">
              {links.map((item) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <a
                      href={path}
                      className="block py-2 text-white hover:text-blue-400 transition-colors duration-200 text-lg md:text-xl font-medium font-poppins"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
              {isAuthenticated && (
                <li>
                  <a
                    href="/admin"
                    className="block py-2 text-white hover:text-blue-400 text-lg md:text-xl font-medium font-poppins"
                  >
                    Admin
                  </a>
                </li>
              )}
            </ul>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-x-12">
            <a
              href="/login"
              className="text-white hover:text-blue-400 border border-transparent hover:border-blue-400 transition duration-200 text-lg md:text-xl font-medium font-poppins px-2"
            >
              Login
            </a>
            <a
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white transition duration-200 text-lg md:text-xl font-medium font-poppins px-2 py-1 rounded"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
