import { FaPhoneAlt, FaEnvelope, FaGithub } from "react-icons/fa";

const Contact = () => (
  <section className="py-20 px-6 bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 dark:from-[#0f172a] dark:to-[#1e293b] transition-colors duration-300">
    <div className="max-w-2xl mx-auto text-center space-y-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 bg-clip-text bg-gradient-to-r from-yellow-400 to-green-600">
        Contact Me
      </h2>
      <div className="space-y-6">
        <div className="flex justify-center items-center space-x-4 text-white">
          <FaPhoneAlt className="text-3xl" />
          <p className="text-xl">+8801990769940</p>
        </div>
        <div className="flex justify-center items-center space-x-4 text-white">
          <FaEnvelope className="text-3xl" />
          <p className="text-xl"> tahmid.karim.saad@gmail.com</p>
        </div>
        <div className="flex justify-center items-center space-x-4 text-white">
          <FaGithub className="text-3xl" />
          <p className="text-xl">
            <a
              href="https://github.com/SaadTK"
              className="text-blue-200 dark:text-blue-600 underline hover:text-blue-300 dark:hover:text-blue-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/SaadTK
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
