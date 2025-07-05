// src/components/Projects.jsx
const projects = [
  {
    title: "Weather App",
    description: "Search weather by city using OpenWeatherMap API.",
    live: "https://weather-app-bc.netlify.app/",
    code: "https://github.com/cerealandmilk98/weather-app",
  },
  {
    title: "Task Tracker",
    description: "Create and manage tasks with React hooks and localStorage.",
    live: "https://task-tracker-bc.netlify.app/",
    code: "https://github.com/cerealandmilk98/task-tracker",
  },
  {
    title: "Crypto Tracker",
    description: "Track cryptocurrency prices using CoinGecko API.",
    live: "https://crypto-tracker-bc.netlify.app/",
    code: "https://github.com/cerealandmilk98/crypto-tracker",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map(({ title, description, live, code }) => (
          <div
            key={title}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <div className="flex gap-4">
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Live Demo
              </a>
              <a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
