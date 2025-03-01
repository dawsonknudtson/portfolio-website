import profilePic from "../assets/placeholder.jpg"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: { x:0, opacity:1, transition: {duration: 0.5, delay:delay } }
})

const Hero = () => {
    return (
        <div className="flex flex-col">
            <div className="absolute top-8 left-8">
                <a href="/components/Hero.jsx">
                    <h1 className="text-2xl font-bold">Dawson</h1>
                </a>
            </div>
            <div className="border-b border-neutral-900 pb-4">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col items-center lg:items-start p-8">
                            <motion.h2 
                                initial={{x: -100, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{duration: 0.5}}
                                className="text-4xl font-bold mb-8"
                            >
                                Blog
                            </motion.h2>
                            <motion.div 
                                className="space-y-4"
                                initial={{x: -100, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{duration: 0.5, delay: 0.2}}
                            >
                                <div className="bg-neutral-900 p-4 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer">
                                    <h3 className="text-xl font-semibold mb-2">Getting Started with React</h3>
                                    <p className="text-neutral-400">A beginner's guide to React development...</p>
                                    <p className="text-sm text-neutral-500 mt-2">Posted on March 15, 2024</p>
                                </div>
                                <div className="bg-neutral-900 p-4 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer">
                                    <h3 className="text-xl font-semibold mb-2">Modern Web Development</h3>
                                    <p className="text-neutral-400">Exploring the latest trends in web development...</p>
                                    <p className="text-sm text-neutral-500 mt-2">Posted on March 10, 2024</p>
                                </div>
                                <div className="bg-neutral-900 p-4 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer">
                                    <h3 className="text-xl font-semibold mb-2">AI in Software Engineering</h3>
                                    <p className="text-neutral-400">How AI is transforming the way we code...</p>
                                    <p className="text-sm text-neutral-500 mt-2">Posted on March 5, 2024</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:p-8">
                        <div className="flex justify-center">
                            <motion.img initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1.2}} src={profilePic} alt="Dawson Knudtson" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;