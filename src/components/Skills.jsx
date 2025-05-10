import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaStripeS,
  FaRss,
} from "react-icons/fa";
import { DiRedis } from "react-icons/di";

const Skills = () => {
  const categories = {
    Frontend: [
      {
        name: "HTML",
        icon: <FaHtml5 className="inline-block mr-2 text-orange-500" />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt className="inline-block mr-2 text-blue-500" />,
      },
      {
        name: "JavaScript (ES6+)",
        icon: <FaJsSquare className="inline-block mr-2 text-yellow-500" />,
      },
      {
        name: "React.js",
        icon: <FaReact className="inline-block mr-2 text-cyan-500" />,
      },
    ],
    Backend: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="inline-block mr-2 text-green-500" />,
      },
      {
        name: "Express.js",
        icon: <FaNodeJs className="inline-block mr-2 text-green-500" />,
      },
      {
        name: "PHP",
        icon: <FaPhp className="inline-block mr-2 text-purple-600" />,
      },
      {
        name: "Python",
        icon: <FaPython className="inline-block mr-2 text-blue-500" />,
      },
    ],
    Database: [
      {
        name: "MongoDB",
        icon: <FaDatabase className="inline-block mr-2 text-green-600" />,
      },
      {
        name: "MySQL",
        icon: <FaDatabase className="inline-block mr-2 text-blue-500" />,
      },
      {
        name: "PostgreSQL",
        icon: <FaDatabase className="inline-block mr-2 text-blue-600" />,
      },
    ],
    Tools: [
      {
        name: "Git",
        icon: <FaGitAlt className="inline-block mr-2 text-orange-600" />,
      },
      {
        name: "GitHub",
        icon: <FaGithub className="inline-block mr-2 text-gray-900" />,
      },
      {
        name: "Redis",
        icon: <DiRedis className="inline-block mr-2 text-red-500" />,
      },
      {
        name: "Stripe",
        icon: <FaStripeS className="inline-block mr-2 text-blue-600" />,
      },
      {
        name: "AJAX",
        icon: <FaRss className="inline-block mr-2 text-gray-600" />,
      },
      {
        name: "REST APIs",
        icon: <FaRss className="inline-block mr-2 text-gray-600" />,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-gradient bg-gradient-to-r from-purple-500 to-blue-500 animate-fade-in">
        Skills
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(categories).map(([category, items]) => (
          <div
            key={category}
            className="shadow-xl rounded-lg p-6 bg-gradient-to-br from-purple-200 to-blue-200 dark:from-gray-700 dark:to-gray-900 transform hover:scale-105 transition-transform duration-300 ease-out"
          >
            <h3 className="text-xl font-semibold mb-4 text-center text-gradient bg-gradient-to-r from-purple-500 to-blue-500">
              {category}
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {items.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex items-center justify-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out"
                >
                  <div className="text-3xl">{icon}</div>
                  <span className="block mt-2 text-black dark:text-white hover:text-gradient text-xl">
                    {name}
                  </span>
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
