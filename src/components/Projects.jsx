import { useState } from "react";
import portfolio from "../../public/portfolio.png";
import myntra from "../../public/Myntra.png";
import social from "../../public/social.png";
import amazon from "../../public/amazon.png";
import game from "../../public/rock-paper-scissors.png";
import instagram from "../../public/instagram.png";

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projectItems = [
    {
      id: 1,
      logo: portfolio,
      name: "Portfolio",
      live: "",
      source: "https://github.com/shubham-shankar-shinde/portfolio",
      info: "Designed and developed a responsive portfolio using React and Tailwind CSS to showcase projects, skills, and experience, with smooth navigation and an interactive user experience.",
      tags: ["React", "Tailwind CSS", "Responsive Design"],
    },
    {
      id: 2,
      logo: myntra,
      name: "Myntra Clone",
      live: "https://sssshubham.netlify.app/",
      source: "https://github.com/shubham-shankar-shinde/MYNTRA-PROJECT",
      info: "Developed a full-stack e-commerce platform inspired by Myntra, using React, Node.js, Express.js, MongoDB, and Redux for a responsive, dynamic, and efficient user experience with seamless navigation.",
      tags: ["React", "Node.js", "MongoDB", "Express.js", "Redux"],
    },
    {
      id: 3,
      logo: social,
      name: "Social Midea",
      live: "https://shubham-social.netlify.app/",
      source: "https://github.com/shubham-shankar-shinde/Social-Midea-App",
      info: "Built a responsive React and Bootstrap-based web app for creating, viewing, and managing posts with real-time validation, featuring user-friendly forms and local state management for smooth user interactions.",
      tags: ["React", "Bootstrap", "CSS", "JavaScript"],
    },
    {
      id: 4,
      logo: amazon,
      name: "Amazon clone",
      live: "https://amazon-shubham.netlify.app/",
      source:
        "https://github.com/shubham-shankar-shinde/project-webdev/tree/main/amazon%20project",
      info: "Created a static Amazon-like web page using only HTML and CSS, featuring a structured layout to mimic the look and functionality of the original homepage, without responsive design.",
      tags: ["HTML", "CSS"],
    },
    {
      id: 5,
      logo: game,
      name: "Game",
      live: "https://shubhams-rock-paper-scissors.netlify.app/",
      source:
        "https://github.com/shubham-shankar-shinde/project-webdev/tree/main/ROCK-PAPER-SCISSORS",
      info: " Created an interactive game using HTML, CSS, and JavaScript, enabling users to compete against the computer with dynamic result display and game logic implemented in JavaScript.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 6,
      logo: instagram,
      name: "Instagram Clone",
      live: "https://shubhams-insta.netlify.app/",
      source:
        "https://github.com/shubham-shankar-shinde/project-webdev/tree/main/instgram",
      info: " Developed a non-responsive Instagram-like web page using HTML and CSS, featuring a sidebar with functional navigation and a stories section to replicate core interface elements.",
      tags: ["HTML", "CSS"],
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-white to-gray-50 py-16"
    >
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my recent work and personal projects that showcase my skills
            in web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectItems.map(({ id, logo, name, live, source, info, tags }) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden group">
                <img
                  className="w-full h-48 object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                  src={logo}
                  alt={`${name} preview`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {name}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{info}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2">
                        <span>Live Demo</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </button>
                    </a>
                  )}
                  <a
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <button className="w-full px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center space-x-2">
                      <span>Source Code</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
