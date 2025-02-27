import profilePic from "../assets/placeholder.jpg"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: { x:0, opacity:1, transition: {duration: 0.5, delay:delay } }
})

const Hero = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="absolute top-8 left-8">
                <a href="/components/Hero.jsx">
                    <h1 className="text-2xl font-bold">Dawson</h1>
                </a>
            </div>
            <div className="border-b border-neutral-900 pb-4 lg:mb-35">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col items-center lg:items-start">
                            
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