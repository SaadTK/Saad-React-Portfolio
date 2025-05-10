import { FaGithub } from "react-icons/fa";
import SaadImg from "../assets/1Saad-white-bg.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
// import { TypeAnimation } from "../assets/Saad_CV.pdf";
import CV from "../assets/Saad_CV.pdf";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white min-h-screen relative overflow-hidden">
      {/* Floating Glow Effect */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-blue-500 opacity-10 rounded-full blur-3xl z-0"></div>

      {/* Profile Image */}
      <motion.img
        src={SaadImg}
        alt="Tahmid Karim Saad"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl mb-6 transition-transform hover:scale-105 duration-300"
      />

      {/* Name */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Tahmid Karim Saad
      </motion.h1>

      {/* Role */}
      <motion.div
        className="text-[22px] md:text-[26px] font-semibold text-white mt-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.6 }}
      >
        <TypeAnimation
          sequence={[
            "Web Developer",
            2000,
            "MERN Stack Developer",
            2000,
            "Backend Engineer",
            2000,
            "Full Stack Problem Solver",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          wrapper="span"
          cursor={true}
        />
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="mt-4 text-base md:text-lg max-w-xl text-gray-300 z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Passionate about creating performant, scalable, and impactful web
        applications that bring real-world ideas to life.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex flex-wrap gap-4 justify-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <a
          href="./Saad_CV.pdf"
          download
          className="px-6 py-2 text-sm font-semibold border border-white rounded-full hover:bg-white hover:text-[#0f172a] transition-colors duration-300 shadow-md"
        >
          Download CV
        </a>
        <a
          href="https://github.com/SaadTK"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 text-sm font-semibold bg-neutral-800 hover:bg-neutral-700 rounded-full flex items-center gap-2 transition-colors duration-300 shadow-md"
        >
          <FaGithub className="text-lg" /> GitHub
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
