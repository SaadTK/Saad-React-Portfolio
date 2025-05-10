import { FaLaptopCode, FaUserAlt } from "react-icons/fa";

const About = () => (
  <section className="py-20 px-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-[#1e293b] dark:to-[#0f172a] transition-colors duration-300">
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
        About Me
      </h2>

      <div className="flex justify-center items-center space-x-8">
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center shadow-lg transform hover:scale-110 transition duration-300">
          <FaUserAlt className="text-white text-3xl" />
        </div>
        <p className="text-base md:text-lg text-gray-100 dark:text-gray-300 leading-relaxed tracking-wide max-w-2xl">
          I’m a Computer Science graduate with a passion for building dynamic
          web applications. I thrive at the intersection of frontend and
          backend, creating seamless user experiences with clean, efficient
          code. I enjoy solving real-world problems and collaborating with
          others to bring ideas to life.
        </p>
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 flex justify-center items-center shadow-lg transform hover:scale-110 transition duration-300">
          <FaLaptopCode className="text-white text-3xl" />
        </div>
      </div>

      <div className="bg-white dark:bg-[#1e293b] p-6 rounded-xl shadow-xl mt-8">
        <p className="text-lg text-center text-gray-800 dark:text-gray-200 font-semibold">
          I'm passionate about building products that bring value to users and
          learning new technologies to stay ahead in the ever-evolving world of
          software development.
        </p>
      </div>
    </div>
  </section>
);

export default About;
