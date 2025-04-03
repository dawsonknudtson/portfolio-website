import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const blogPosts = {
    "crypto-market": {
        title: "What's Happening with Crypto?",
        preview: "My view on the current crypto economy can be summed up in one word: confused. Because this is what happens when public authority realizes what power they hold and the damage they can do.",
        date: "February 28, 2025",
        slug: "whats-happening-with-crypto"
    }
};

const Hero = () => {
    return (
        <>
            <div className="fixed top-8 left-8 z-10">
                <Link to="/">
                    <h1 className="text-2xl font-bold text-[#5fbca3]">Dawson</h1>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-start min-h-screen pt-32">
                <div className="max-w-2xl w-full px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-left mb-12"
                    >
                        <Link 
                            to={`/blog/${blogPosts["crypto-market"].slug}`}
                            className="inline-block hover:text-[#5fbca3] transition-colors"
                        >
                            <h1 className="text-2xl font-bold mb-3">{blogPosts["crypto-market"].title}</h1>
                        </Link>
                        <p className="text-base text-neutral-400 mb-2">{blogPosts["crypto-market"].preview}</p>
                        <p className="text-sm text-neutral-500">{blogPosts["crypto-market"].date}</p>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Hero;