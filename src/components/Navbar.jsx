import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a 
          href="https://www.linkedin.com/in/dawson-knudtson/"
          whileHover={{ scale: 1.3, y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 8 }}
        >
          <FaLinkedin className="hover:text-[#5fbca3] transition-colors" />
        </motion.a>
        <motion.a 
          href="https://github.com/dawsonk04"
          whileHover={{ scale: 1.3, y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 8 }}
        >
          <FaGithub className="hover:text-[#5fbca3] transition-colors" />
        </motion.a>
        <motion.a 
          href="https://www.instagram.com/dawsonknudtson/"
          whileHover={{ scale: 1.3, y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 8 }}
        >
          <FaInstagram className="hover:text-[#5fbca3] transition-colors" />
        </motion.a>
        <motion.a 
          href="https://x.com/dawsonknudtson"
          whileHover={{ scale: 1.3, y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 8 }}
        >
          <FaTwitter className="hover:text-[#5fbca3] transition-colors" />
        </motion.a>
        <motion.a 
          href="https://www.youtube.com/"
          whileHover={{ scale: 1.3, y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 8 }}
        >
          <FaYoutube className="hover:text-[#5fbca3] transition-colors" />
        </motion.a>
      </div>
    </nav>
  );
};

export default NavBar;
