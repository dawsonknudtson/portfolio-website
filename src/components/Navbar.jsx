import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className="mb-12 sm:mb-20 flex items-center justify-end py-4 sm:py-6">
      <div className="mx-4 sm:m-8 flex items-center justify-center gap-6 sm:gap-8 text-base sm:text-lg">
      <motion.a 
          href="#"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="text-[#5fbca3] hover:font-bold transition-all"
        >
          Archive
        </motion.a>
        <motion.a 
          href="https://www.instagram.com/dawsonknudtson/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="text-[#5fbca3] hover:font-bold transition-all"
        >
          Instagram
        </motion.a>
        <motion.a 
          href="https://x.com/dawsonknudtson"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="text-[#5fbca3] hover:font-bold transition-all"
        >
          X
        </motion.a>
        <motion.a 
          href="https://www.youtube.com/dawsonknudtson"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="text-[#5fbca3] hover:font-bold transition-all"
        >
          Youtube
        </motion.a>
        <motion.a 
          href="https://github.com/dawsonknudtson"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="text-[#5fbca3] hover:font-bold transition-all"
        >
          Code
        </motion.a>
      </div>
    </nav>
  );
};

export default NavBar;
