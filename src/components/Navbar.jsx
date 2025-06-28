import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className="mb-6 sm:mb-8 lg:mb-12 xl:mb-20 flex items-center justify-end py-2 sm:py-4 lg:py-6">
      <div className="mx-1 sm:mx-2 lg:mx-4 xl:m-8 flex items-center justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-8 text-xs sm:text-sm md:text-base lg:text-lg flex-wrap">
        <motion.a 
          href="#"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="text-[#5fbca3] hover:font-bold transition-all whitespace-nowrap hidden sm:block"
        >
          Archive
        </motion.a>
        <motion.a 
          href="https://www.instagram.com/dawsonknudtson/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="text-[#5fbca3] hover:font-bold transition-all whitespace-nowrap hidden sm:block"
        >
          IG
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
          YT
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
