import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Web Developer Intern – TaskirsView",
    period: "Oct 2024 – Feb 2025",
    points: [
      "Optimized pages for performance and responsiveness",
      "Built feature-rich pages using Agile practices",
      "Wrote modular, reusable, and maintainable components",
    ],
  },
];

const Experience = () => (
  <section className="py-16 px-6 bg-white dark:bg-[#0f172a] transition-colors duration-300">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        Experience
      </h2>

      <div className="relative pl-6 border-l-2 border-blue-500 space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative ml-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-7 top-1">
              <FaBriefcase className="text-blue-500 text-lg bg-white dark:bg-[#0f172a] rounded-full p-1 border border-blue-500" />
            </div>
            <div className="bg-gray-50 dark:bg-[#1e293b] p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {exp.period}
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-gray-300 space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
