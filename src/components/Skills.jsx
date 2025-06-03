import { useState } from "react";
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
  const [hoveredId, setHoveredId] = useState(null);

  const skillCategories = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Redux", "TailWind"],
    backend: ["NodeJs", "ExpressJs", "Mysql", "MongoDB"],
    programming: ["Java", "Python"],
    tools: ["Git"],
  };

  const carditems = [
    {
      id: 1,
      logo: html,
      name: "HTML",
      category: "frontend",
      proficiency: 90,
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
      category: "frontend",
      proficiency: 80,
    },
    {
      id: 3,
      logo: js,
      name: "JavaScript",
      category: "frontend",
      proficiency: 85,
    },
    {
      id: 4,
      logo: react,
      name: "React",
      category: "frontend",
      proficiency: 75,
    },
    {
      id: 5,
      logo: redux,
      name: "Redux",
      category: "frontend",
      proficiency: 70,
    },
    {
      id: 6,
      logo: tailwind,
      name: "TailWind",
      category: "frontend",
      proficiency: 65,
    },
    {
      id: 7,
      logo: node,
      name: "NodeJs",
      category: "backend",
      proficiency: 80,
    },
    {
      id: 8,
      logo: EXpress,
      name: "ExpressJs",
      category: "backend",
      proficiency: 75,
    },
    {
      id: 9,
      logo: mysql,
      name: "Mysql",
      category: "backend",
      proficiency: 70,
    },
    {
      id: 10,
      logo: Mdb,
      name: "MongoDB",
      category: "backend",
      proficiency: 65,
    },
    {
      id: 11,
      logo: java,
      name: "Java",
      category: "programming",
      proficiency: 60,
    },
    {
      id: 12,
      logo: python,
      name: "Python",
      category: "programming",
      proficiency: 55,
    },
    {
      id: 13,
      logo: git,
      name: "Git",
      category: "tools",
      proficiency: 85,
    },
  ];
  return (
    <div name="Skills" className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Technical Skills
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My technical toolkit and expertise in various technologies
          </p>
        </div>

        {/* Skill Categories */}
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6 capitalize">
              {category} Development
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {carditems
                .filter((item) => skills.includes(item.name))
                .map(({ id, logo, name, proficiency }) => (
                  <div
                    key={id}
                    className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                    onMouseEnter={() => setHoveredId(id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <div className="relative w-16 h-16 md:w-20 md:h-20">
                        <div className="absolute inset-0 bg-blue-500/10 rounded-full group-hover:scale-110 transition-transform duration-300" />
                        <img
                          src={logo}
                          alt={name}
                          className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-800 text-lg">
                        {name}
                      </h3>

                      {/* Proficiency Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                          style={{
                            width: hoveredId === id ? `${proficiency}%` : "0%",
                          }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">
                        {hoveredId === id
                          ? `${proficiency}% Proficiency`
                          : "Hover to see proficiency"}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
