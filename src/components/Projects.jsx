import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectModal from "./ProjectModal";
import aImg1 from "../../public/accesoSync1.png";
import aImg2 from "../../public/accesoSync2.png";
import aImg3 from "../../public/accesoSync3.png";

import hImg1 from "../../public/homePage1.jpeg";
import hImg2 from "../../public/homePage2.jpeg";
import hImg3 from "../../public/homePage3.jpeg";
import hImg4 from "../../public/homePage4.jpeg";

const projects = [
  {
    title: "Skill Connect",
    stack: "HTML5, Bootstrap, JavaScript, PHP, MySQL, Redis, Stripe",
    link: "https://skill-connect-online.webhop.me/",
    github: "https://github.com/SaadTK/Skill-Connect-Job-Portal",
    description:
      "A job portal with real-time search, GitHub OAuth login, and Redis caching for fast performance.",
    images: [hImg1, hImg2, hImg3, hImg4],
  },
  {
    title: "AccessoSync",
    stack: "MongoDB, Express.js, React.js, Node.js",
    link: "https://accesso-sync-online.webhop.me/",
    github: "https://github.com/SaadTK/Accesso-Sync-Online",
    description:
      "A MERN-based e-commerce app featuring a cart system, role-based access, and responsive design.",
    images: [aImg1, aImg2, aImg3],
  },
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const openModal = (images) => {
    setSelectedImages(images);
    setModalOpen(true);
  };

  return (
    <section className="py-16 px-6 bg-white dark:bg-[#0f172a] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Projects
        </h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {projects.map(
            ({ title, stack, link, github, description, images }, i) => (
              <motion.div
                key={title}
                className="group block p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1e293b] shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition"
                  >
                    {title}
                  </a>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 group-hover:text-blue-400 transition"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
                  {stack}
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {description}
                </p>
                <div className="mt-4 flex gap-4 flex-wrap">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded hover:bg-gray-700 transition"
                  >
                    <FaGithub className="mr-2" /> View on GitHub
                  </a>
                  <button
                    onClick={() => openModal(images)}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-500 transition"
                  >
                    View Screenshots
                  </button>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* Modal for screenshots */}
      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={selectedImages}
      />
    </section>
  );
};

export default Projects;
