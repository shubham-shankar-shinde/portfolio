import html from "../../public/html.png";
import css from "../../public/css.png";
import js from "../../public/js.png";
import react from "../../public/react.png";
import redux from "../../public/redux.jpeg";
import tailwind from "../../public/tailwind.png";
import node from "../../public/node-js.png";
import EXpress from "../../public/express.png";
import mysql from "../../public/mysql.png";
import Mdb from "../../public/mongodb.png";
import java from "../../public/java.png";
import python from "../../public/python.png";
import git from "../../public/git.png";
const Skills = () => {
  const carditems = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: js,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: react,
      name: "React",
    },
    {
      id: 5,
      logo: redux,
      name: "Redux",
    },
    {
      id: 6,
      logo: tailwind,
      name: "TailWind",
    },
    {
      id: 7,
      logo: node,
      name: "NodeJs",
    },
    {
      id: 8,
      logo: EXpress,
      name: "ExpressJs",
    },
    {
      id: 9,
      logo: mysql,
      name: "Mysql",
    },
    {
      id: 10,
      logo: Mdb,
      name: "MongoDB",
    },
    {
      id: 11,
      logo: java,
      name: "Java",
    },
    {
      id: 12,
      logo: python,
      name: "Python",
    },
    {
      id: 13,
      logo: git,
      name: "Git",
    },
  ];
  return (
    <div
      name="Skills"
      className="shadow-md max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 pb-2"
    >
      <h1 className="text-3xl font-bold mb-5 ">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-7 my-3 lg:grid-cols-5">
        {carditems.map(({ id, logo, name, live, source, info }) => (
          <div
            key={id}
            className=" flex flex-col items-center justify-center border-[2px] rounded-full p-1 cursor-pointer hover:scale-110 duration-300 my-2 md:w-[200px] md:h-[200px] "
          >
            <img
              className="w-[150px] rounded-full "
              src={logo}
              alt="project picture"
            />
            <div>
              <h1 className="font-bold text-xl text-center">{name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
