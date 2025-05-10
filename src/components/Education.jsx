import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap, FaSchool } from "react-icons/fa";

const educationData = [
  {
    icon: <FaUniversity className="text-blue-500 text-xl" />,
    institute: "North South University",
    details: "BSc in CSE (2020–2024)",
    grade: "CGPA: 3.04",
    color: "border-blue-500",
  },
  {
    icon: <FaGraduationCap className="text-green-500 text-xl" />,
    institute: "Jatir Janak Bangabandhu Sheikh Mujibur Rahman Govt. College",
    details: "HSC (2019)",
    grade: "GPA: 3.92",
    color: "border-green-500",
  },
  {
    icon: <FaSchool className="text-yellow-500 text-xl" />,
    institute: "Gulshan Model High School",
    details: "SSC (2017)",
    grade: "GPA: 5.00",
    color: "border-yellow-500",
  },
];

const Education = () => (
  <section className="py-16 px-6 bg-white dark:bg-[#0f172a] transition-colors duration-300">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        Education
      </h2>
      <ul className="space-y-6">
        {educationData.map(
          ({ icon, institute, details, grade, color }, index) => (
            <motion.li
              key={index}
              className={`flex items-start gap-4 border-l-4 pl-4 ${color}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mt-1">{icon}</div>
              <div>
                <p className="font-semibold text-lg">{institute}</p>
                <p className="text-sm">
                  {details} — <span className="font-medium">{grade}</span>
                </p>
              </div>
            </motion.li>
          )
        )}
      </ul>
    </div>
  </section>
);

export default Education;
