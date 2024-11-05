import portfolio from "../../public/portfolio.png";
import myntra from "../../public/Myntra.png";
import social from "../../public/social.png";
import amazon from "../../public/amazon.png";
import game from "../../public/rock-paper-scissors.png";
import instagram from "../../public/instagram.png";
const Projects = () => {
  const carditems = [
    {
      id: 1,
      logo: portfolio,
      name: "Portfolio",
      live: "",
      source: "https://github.com/shubham-shankar-shinde/portfolio",
      info: "Designed and developed a responsive portfolio using React and Tailwind CSS to showcase projects, skills, and experience, with smooth navigation and an interactive user experience. ",
    },
    {
      id: 2,
      logo: myntra,
      name: "Myntra Clone",
      live: "https://sssshubham.netlify.app/",
      source: "https://github.com/shubham-shankar-shinde/MYNTRA-PROJECT",
      info: "Developed a full-stack e-commerce platform inspired by Myntra, using React, Node.js, Express.js, MongoDB, and Redux for a responsive, dynamic, and efficient user experience with seamless navigation.",
    },
    {
      id: 3,
      logo: social,
      name: "Social Midea",
      live: "https://shubham-social.netlify.app/",
      source: "https://github.com/shubham-shankar-shinde/Social-Midea-App",
      info: "Built a responsive React and Bootstrap-based web app for creating, viewing, and managing posts with real-time validation, featuring user-friendly forms and local state management for smooth user interactions.",
    },
    {
      id: 4,
      logo: amazon,
      name: "Amazon clone",
      live: "https://amazon-shubham.netlify.app/",
      source:
        "https://github.com/shubham-shankar-shinde/project-webdev/tree/main/amazon%20project",
      info: "Created a static Amazon-like web page using only HTML and CSS, featuring a structured layout to mimic the look and functionality of the original homepage, without responsive design.",
    },
    {
      id: 5,
      logo: game,
      name: "Game",
      live: "https://shubhams-rock-paper-scissors.netlify.app/",
      source:
        "https://github.com/shubham-shankar-shinde/project-webdev/tree/main/ROCK-PAPER-SCISSORS",
      info: " Created an interactive game using HTML, CSS, and JavaScript, enabling users to compete against the computer with dynamic result display and game logic implemented in JavaScript.",
    },
    {
      id: 6,
      logo: instagram,
      name: "Instagram Clone",
      live: "https://shubhams-insta.netlify.app/",
      source:
        "https://github.com/shubham-shankar-shinde/project-webdev/tree/main/instgram",
      info: " Developed a non-responsive Instagram-like web page using HTML and CSS, featuring a sidebar with functional navigation and a stories section to replicate core interface elements.",
    },
  ];
  return (
    <div
      name="Projects"
      className="shadow-md max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 pb-2"
    >
      <h1 className="text-3xl font-bold mb-5 ">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5 lg:grid-cols-3">
        {carditems.map(({ id, logo, name, live, source, info }) => (
          <div
            key={id}
            className="md:w-[360px] md:h-[360px] border-[2px] rounded-2xl shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 my-2"
          >
            <img
              className="w-[220px] h-[120px] p-1   border-[1px] rounded-xl ml-20 md:ml-16  "
              src={logo}
              alt="project picture"
            />
            <div>
              <h1 className="font-bold text-xl mb-2 px-2 text-center">
                {name}
              </h1>
              <p className="px-2 text-gray-700 text-center">{info}</p>
            </div>
            <div className="pl-9 md:pl-4 py-4 justify-around ">
              <a href={live} target="_blank">
                {" "}
                <button className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mx-6">
                  <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] "></span>
                  Live App
                </button>
              </a>{" "}
              <a href={source} target="_blank">
                <button className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mx-6">
                  <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Source Code
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
