import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/dawson-knudtson/">
          <FaLinkedin className="hover:text-[#DB0042] transition-colors" />
        </a>
        <a href="https://github.com/dawsonk04">
          <FaGithub className="hover:text-[#DB0042] transition-colors" />
        </a>
        <a href="https://www.instagram.com/dawsonknudtson/">
          <FaInstagram className="hover:text-[#DB0042] transition-colors" />
        </a>
        <a href="https://x.com/dawsonknudtson">
          <FaTwitter className="hover:text-[#DB0042] transition-colors" />
        </a>
        <a href="https://www.youtube.com/">
          <FaYoutube className="hover:text-[#DB0042] transition-colors" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
