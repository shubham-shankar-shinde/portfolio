import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { ReactTyped } from "react-typed";
import url from "../../public/IMG20240710115036.jpg";

const Home = () => {
  return (
    <div
      name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6 order-2 md:order-1">
            <div className="space-y-4">
              <span className="text-xl text-blue-600 font-medium animate-fade-in">
                Welcome to my Portfolio
              </span>

              <div className="flex items-center space-x-2 text-3xl md:text-5xl font-bold">
                <h1 className="text-gray-800">I'm a</h1>
                <ReactTyped
                  className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                  strings={["Developer", "Programmer", "Problem Solver"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                Hi, I'm Shubham Shinde, a passionate Full-Stack Developer with
                expertise in the MERN stack and modern web technologies. I
                specialize in building responsive, user-friendly web
                applications that deliver exceptional user experiences.
              </p>
            </div>

            {/* Social & Tech Stack */}
            <div className="space-y-8 md:space-y-12">
              {/* Social Links */}
              <div>
                <h2 className="font-semibold text-gray-800 mb-4">
                  Connect With Me
                </h2>
                <div className="flex gap-4">
                  {[
                    {
                      icon: <IoLogoInstagram size={24} />,
                      url: "https://www.instagram.com/s_h_u_b_h_a_m___8412/",
                      color: "hover:bg-pink-500",
                    },
                    {
                      icon: <FaGithub size={24} />,
                      url: "https://github.com/shubham-shankar-shinde/project-webdev",
                      color: "hover:bg-gray-800",
                    },
                    {
                      icon: <FaLinkedin size={24} />,
                      url: "https://www.linkedin.com/in/shubham-shinde8412",
                      color: "hover:bg-blue-600",
                    },
                    {
                      icon: <BiLogoGmail size={24} />,
                      url: "mailto:shubhamshinde8412@gmail.com",
                      color: "hover:bg-red-500",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full border-2 border-gray-200 ${social.color} hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-110`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h2 className="font-semibold text-gray-800 mb-4">Tech Stack</h2>
                <div className="flex gap-4">
                  {[
                    {
                      icon: <DiMongodb size={30} />,
                      name: "MongoDB",
                      url: "https://www.mongodb.com/",
                      color: "hover:bg-green-500",
                    },
                    {
                      icon: <SiExpress size={30} />,
                      name: "Express.js",
                      url: "https://expressjs.com/",
                      color: "hover:bg-gray-700",
                    },
                    {
                      icon: <FaReact size={30} />,
                      name: "React",
                      url: "https://react.dev/",
                      color: "hover:bg-blue-500",
                    },
                    {
                      icon: <FaNodeJs size={30} />,
                      name: "Node.js",
                      url: "https://nodejs.org/",
                      color: "hover:bg-green-600",
                    },
                  ].map((tech, index) => (
                    <a
                      key={index}
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg border-2 border-gray-200 ${tech.color} hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-110`}
                      title={tech.name}
                    >
                      {tech.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-20"></div>
              <img
                src={url}
                alt="Profile"
                className="relative rounded-full w-64 md:w-96 mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
