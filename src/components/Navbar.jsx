import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className="mb-8 sm:mb-12 lg:mb-20 flex items-center justify-end py-4 sm:py-6">
      <div className="mx-2 sm:mx-4 lg:m-8 flex items-center justify-center gap-3 sm:gap-4 lg:gap-8 text-sm sm:text-base lg:text-lg flex-wrap">
      <motion.a 
          href="#"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="text-[#5fbca3] hover:font-bold transition-all whitespace-nowrap"
        >
          Archive
        </motion.a>
        <motion.a 
          href="https://www.instagram.com/dawsonknudtson/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="text-[#5fbca3] hover:font-bold transition-all whitespace-nowrap"
        >
          Instagram
        </motion.a>
        <motion.a 
          href="https://x.com/dawsonknudtson"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="text-[#5fbca3] hover:font-bold transition-all whitespace-nowrap"
        >
          X
        </motion.a>
        <motion.a 
          href="https://www.youtube.com/dawsonknudtson"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="text-[#5fbca3] hover:font-bold transition-all whitespace-nowrap"
        >
          Youtube
        </motion.a>
        <motion.a 
          href="https://github.com/dawsonknudtson"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="text-[#5fbca3] hover:font-bold transition-all whitespace-nowrap"
        >
          Code
        </motion.a>
      </div>
    </nav>
  );
};

export default NavBar;
