import NavBar from "./components/Navbar";
import Hero from "./components/Hero"
import BlogPost from "./components/BlogPost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const HomePage = () => (
  <>
    <NavBar />
    <Hero />
    </>
);

const App = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -30], {
    clamp: false,
    stiffness: 0.1,
    damping: 15
  });

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Router>
      {/* Fixed header - completely isolated from transforms */}
      <div className="fixed top-2 sm:top-4 lg:top-8 left-2 sm:left-4 lg:left-14 xl:left-40 z-50 flex items-center gap-1 sm:gap-2" style={{ transform: 'translateZ(0)' }}>
        <Link to="/">
          <h1 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#5fbca3] ">Dawson</h1>
        </Link>
        <button 
          onClick={toggleDarkMode}
          className="p-0.5 sm:p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {darkMode ? (
            <BsFillSunFill className="text-yellow-400 text-xs sm:text-sm lg:text-base" />
          ) : (
            <BsFillMoonFill className="text-gray-400 text-xs sm:text-sm lg:text-base" />
          )}
        </button>
      </div>

      <div className="min-h-screen bg-white dark:bg-[#1E1F21] overflow-x-hidden text-neutral-900 dark:text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> 
        </div>
        
        <motion.div 
          style={{ y }}
          className="container mx-auto px-4 sm:px-8"
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  );
};

export default App;