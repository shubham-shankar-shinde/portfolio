import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { ReactTyped } from "react-typed";
import { url } from "../../public/IMG20240710115036.jpg";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 shadow-md pb-16 md:pb-28 "
      >
        <div className="flex flex-col md:flex-row space-y-2">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl"> Welcome in my Website </span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello,I'm a </h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hi, I'm Shubham Shinde, a passionate Full-Stack Developer with
              expertise in HTML, CSS, JavaScript, React, Node.js, Express,
              MongoDB, MySQL, SQL, and Tailwind CSS. I specialize in building
              responsive, user-friendly web applications from concept to
              deployment. My goal is to create seamless, efficient, and visually
              appealing solutions that enhance user experiences and drive
              digital success.
            </p>

            <br />
            <div className=" md:flex items-center space-x-6">
              {/*  social */}
              <div className="space-x-6 ">
                <h1 className="font-bold text-center">Avaliable on</h1>
                <div className="flex mt-8 items-center gap-4">
                  <div className="social-button ml-14 md:ml-0 ">
                    <button className="relative w-12 h-12 rounded-full group m-1 ">
                      <div className="floater w-full h-full absolute top-0 left-0 bg-pink-700 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                      <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-pink-700  rounded-full">
                        <a
                          href="https://www.instagram.com/s_h_u_b_h_a_m___8412/"
                          target="_child"
                        >
                          {" "}
                          <IoLogoInstagram size={30} />
                        </a>
                      </div>
                    </button>
                    <button className="relative w-12 h-12 rounded-full group  m-1">
                      <div className="floater w-full h-full absolute top-0 left-0 bg-purple-700 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                      <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-purple-700  rounded-full">
                        <a
                          href=" https://github.com/shubham-shankar-shinde/project-webdev"
                          target="_child"
                        >
                          {" "}
                          <FaGithub size={30} />
                        </a>
                      </div>
                    </button>
                    <button className="relative w-12 h-12 rounded-full group m-1">
                      <div className="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                      <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full">
                        <a
                          href="https://www.linkedin.com/in/shubham-shinde8412"
                          target="_child"
                        >
                          {" "}
                          <FaLinkedin size={30} />
                        </a>
                      </div>
                    </button>
                    <button className="relative w-12 h-12 rounded-full group  m-1">
                      <div className="floater w-full h-full absolute top-0 left-0 bg-red-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                      <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-400 rounded-full">
                        <a
                          href="mailto:shubhamshinde8412@gmail.com"
                          target="_child"
                        >
                          {" "}
                          <BiLogoGmail size={30} />
                        </a>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              {/* working  */}
              <div className="mt-12 md:mt-0  ">
                <h1 className="font-bold text-center md:ml-14  ml-0">
                  Currently Working On
                </h1>
                <div className="flex mt-8 gap-4">
                  <div className="social-button ml-14 ">
                    <button className="relative w-12 h-12 rounded-full group m-1">
                      <div className="floater w-full h-full absolute top-0 left-0 bg-green-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                      <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-green-400 rounded-full">
                        <a href="https://www.mongodb.com/" target="_child">
                          {" "}
                          <DiMongodb size={36}></DiMongodb>
                        </a>
                      </div>
                    </button>
                    <button className="relative w-12 h-12 rounded-full group m-1">
                      <div className="floater w-full h-full absolute top-0 left-0 bg-yellow-300 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                      <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-yellow-300 rounded-full">
                        <a href=" https://expressjs.com/" target="_child">
                          {" "}
                          <SiExpress size={30} />
                        </a>
                      </div>
                    </button>
                    <button className="relative w-12 h-12 rounded-full group m-1">
                      <div className="floater w-full h-full absolute top-0 left-0 bg-blue-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                      <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-400 rounded-full">
                        <a href="https://react.dev/" target="_child">
                          {" "}
                          <FaReact size={30} />
                        </a>
                      </div>
                    </button>
                    <button className="relative w-12 h-12 rounded-full group m-1">
                      <div className="floater w-full h-full absolute top-0 left-0 bg-green-600 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                      <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-green-600 rounded-full">
                        <a href="https://nodejs.org/en" target="_child">
                          {" "}
                          <FaNodeJs size={30} />
                        </a>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:pt-20 order-1 pt-8 md:order-2 ">
            <img
              src={url}
              alt="profile"
              className="rounded-full md:h-[450px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
