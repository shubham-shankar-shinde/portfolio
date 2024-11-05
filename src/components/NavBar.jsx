import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
const NavBar = () => {
  const [menu, setmenu] = useState(false);
  const Navitems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "Aoout",
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
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bottom-0 z-50 bg-white">
        <div className=" flex justify-between items-center h-16 ">
          <div className="flex space-x-2">
            <img
              src="../public/IMG20240710115036.jpg"
              alt="profile"
              className=" h-12 w-12 rounded-full"
            />
            <h1 className="font-semibold text-xl cursor-pointer">
              SHUBH<span className="text-red-700 text-2xl">@M</span>
              <p className="text-sm">WEB DEVELOPER</p>
            </h1>
          </div>
          <div className="">
            <ul className="md:flex space-x-8 hidden ">
              {Navitems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-110 duration-150 cursor-pointer hover:bg-pink-300 rounded-2xl px-1 py-2  "
                >
                  {" "}
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setmenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {menu && (
          <div className=" bg-white  ">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl ">
              {Navitems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-150 cursor-pointer font-semibold  "
                  key={id}
                >
                  <Link
                    onClick={() => setmenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {" "}
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default NavBar;
