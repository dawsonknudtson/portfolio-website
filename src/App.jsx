import NavBar from "./components/Navbar";
import Hero from "./components/Hero"
import Contact from "./components/Contact";
import BlogPost from "./pages/Blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const HomePage = () => (
  <>
    <NavBar />
    <Hero />
    {/* <About /> */}
    <Contact />
  </>
);

const App = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -30], {
    clamp: false,
    stiffness: 0.1,
    damping: 15
  });

  return (
    <Router>
      <div className="min-h-screen bg-[#1E1F21] overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> 
        </div>

        {/* Fixed name that won't scroll */}
        <div className="fixed top-4 sm:top-8 left-4 sm:left-8 z-10">
          <Link to="/">
            <h1 className="text-xl sm:text-2xl font-bold text-[#5fbca3]">Dawson</h1>
          </Link>
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