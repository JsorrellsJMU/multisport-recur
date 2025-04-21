import { useState } from "react";
import logo from '../assets/5.png';
function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const isAuthenticated = false;

  return (
    <header className="bg-zinc-900 text-white shadow-md">
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <div className="w-40 lg:w-52 flex items-center">
            <a href="/" className="block">
              <img
                src={logo}
                alt="Multi Sport Recur Logo"
                className="h-16 lg:h-20 object-contain"
              />
            </a>
          </div>


          {/* Toggle */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className={`lg:hidden z-50 flex flex-col items-end justify-center space-y-1 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${navbarOpen ? "scale-90" : ""
              }`}
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${navbarOpen ? "rotate-45 translate-y-[5px]" : ""
                }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${navbarOpen ? "opacity-0" : "opacity-100"
                }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${navbarOpen ? "-rotate-45 -translate-y-[5px]" : ""
                }`}
            ></span>
          </button>

          {/* Nav Links */}
          <nav
            className={`${navbarOpen ? "block" : "hidden"
              } absolute top-full right-4 w-[250px] rounded bg-zinc-800 shadow-lg px-6 py-4 lg:static lg:block lg:w-auto lg:bg-transparent lg:shadow-none`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center">
              {["Home", "Resources", "Athletes", "Shop", "Contact"].map((item) => (
                <li key={item} className="lg:ml-6">
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="block py-2 text-white hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
              {isAuthenticated && (
                <li className="lg:ml-6">
                  <a href="/admin" className="block py-2 text-white hover:text-blue-400">
                    Admin
                  </a>
                </li>
              )}
            </ul>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/login"
              className="px-4 py-2 rounded-md text-white hover:text-blue-400 border border-transparent hover:border-blue-400 transition duration-200"
            >
              Login
            </a>
            <a
              href="/signup"
              className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700 transition duration-200 shadow-sm"
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
