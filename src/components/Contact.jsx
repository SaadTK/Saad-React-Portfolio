import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => (
  <footer className="bg-[#0f172a] text-white py-10 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Contact Info */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-green-400">Contact</h3>
        <div className="flex items-center space-x-3">
          <FaPhoneAlt className="text-xl text-green-300" />
          <span>+8801990769940</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-xl text-green-300" />
          <span>tahmid.karim.saad@gmail.com</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-bold text-green-400">Follow Me</h3>
        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href="https://github.com/SaadTK"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/tahmidkarim.saad/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/tahmidkarim.saad/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/TahmidSaad59196"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://leetcode.com/u/TahmidSaad/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>

      {/* Branding */}
      <div className="text-center md:text-right space-y-4">
        <h3 className="text-2xl font-bold text-green-400">Tahmid Karim Saad</h3>
        <p className="text-gray-400">
          Passionate Full Stack Developer building responsive web apps.
        </p>
      </div>
    </div>

    <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Tahmid Karim Saad. All rights reserved.
    </div>
  </footer>
);

export default Contact;
