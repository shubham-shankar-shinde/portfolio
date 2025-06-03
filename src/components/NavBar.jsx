import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import url from "../../public/IMG20240710115036.jpg";

const NavBar = () => {
  const [menu, setmenu] = useState(false);
  const Navitems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About", // Fixed typo
    },
    {
      id: 3,
      text: "Projects",
    },
    {
      id: 4,
      text: "Skills",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img
                src={url}
                alt="profile"
                className="relative h-12 w-12 rounded-full object-cover border-2 border-gray-100 hover:border-blue-500 transition-colors duration-300"
              />
            </div>
            <div>
              <h1 className="font-bold text-xl cursor-pointer">
                SHUBH<span className="text-blue-600 text-2xl">@M</span>
              </h1>
              <p className="text-sm text-gray-600 font-medium">WEB DEVELOPER</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {Navitems.map(({ id, text }) => (
                <li key={id}>
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                    activeClass="text-blue-600 bg-blue-50"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setmenu(!menu)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label={menu ? "Close menu" : "Open menu"}
          >
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menu && (
          <div className="fixed inset-0 top-16 bg-white/95 backdrop-blur-sm md:hidden">
            <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
              {Navitems.map(({ id, text }) => (
                <li key={id}>
                  <Link
                    onClick={() => setmenu(false)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="block px-6 py-3 rounded-xl font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                    activeClass="text-blue-600 bg-blue-50"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
