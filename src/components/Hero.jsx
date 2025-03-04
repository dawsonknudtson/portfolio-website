import profilePic from "../assets/placeholder.jpg"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: { x:0, opacity:1, transition: {duration: 0.5, delay:delay } }
})

const Hero = () => {
    return (
        <div className="flex flex-col">
            <div className="absolute top-8 left-8">
                <Link to="/">
                    <h1 className="text-2xl font-bold text-[#DB0042]">Dawson</h1>
                </Link>
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
                                <Link to="/blog/whats-happening-with-crypto" className="block">
                                    <div className="bg-neutral-900 p-4 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer">
                                        <h3 className="text-xl font-semibold mb-2">Whats happening with crypto?</h3>
                                        <p className="text-neutral-400">Current state of crypto and what is happening in the market</p>
                                        <p className="text-sm text-neutral-500 mt-2">Posted on Febuary 28, 2025</p>
                                    </div>
                                </Link>
                                <Link to="/blog/skills-i-am-learning-and-why" className="block">
                                    <div className="bg-neutral-900 p-4 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer">
                                        <h3 className="text-xl font-semibold mb-2">Skills I am learning and why?</h3>
                                        <p className="text-neutral-400">Skills I am currenetly learning and why I am learning them</p>
                                        <p className="text-sm text-neutral-500 mt-2">Posted on Febuary 28, 2025</p>
                                    </div>
                                </Link>
                                <Link to="/blog/ai-in-software-engineering" className="block">
                                    <div className="bg-neutral-900 p-4 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer">
                                        <h3 className="text-xl font-semibold mb-2">How AI is going to affect not just software engineering but all industries</h3>
                                        <p className="text-neutral-400">AI wont take your job (no guarantees)</p>
                                        <p className="text-sm text-neutral-500 mt-2">Posted on Febuary 28, 2025</p>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:p-8">
                        <div className="flex justify-center">
                            <motion.img initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1.2}} src={profilePic} alt="Dawson Knudtson" className="rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;