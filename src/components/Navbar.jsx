import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import firstMarketing from "../images/1'st.png";

const NavBar = () => {
  return (
    <nav className="mb-12 sm:mb-20 flex items-center justify-end py-4 sm:py-6">
      <div className="mx-4 sm:m-8 flex items-center justify-center gap-3 sm:gap-4 text-xl sm:text-2xl">
        <motion.a 
          href="https://1st-marketing.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3, y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 8 }}
        >
          <img src={firstMarketing} alt="1'st Marketing" className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-80 transition-opacity" />
        </motion.a>
        <motion.a 
          href="https://www.linkedin.com/in/dawson-knudtson/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3, y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 8 }}
          className="hover:text-[#5fbca3] transition-colors"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a 
          href="https://github.com/dawsonk04"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3, y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 8 }}
          className="hover:text-[#5fbca3] transition-colors"
        >
          <FaGithub />
        </motion.a>
        <motion.a 
          href="https://www.instagram.com/dawsonknudtson/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3, y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 8 }}
          className="hover:text-[#5fbca3] transition-colors"
        >
          <FaInstagram />
        </motion.a>
        <motion.a 
          href="https://x.com/dawsonknudtson"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3, y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 8 }}
          className="hover:text-[#5fbca3] transition-colors"
        >
          <FaTwitter />
        </motion.a>
        <motion.a 
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3, y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 8 }}
          className="hover:text-[#5fbca3] transition-colors"
        >
          <FaYoutube />
        </motion.a>
      </div>
    </nav>
  );
};

export default NavBar;
