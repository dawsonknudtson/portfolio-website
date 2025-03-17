import { motion } from "framer-motion"

const Technologies = () => {
    return ( 
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2 
                whileInView={{opacity:1, y:0}} 
                initial={{opacity:0, y:-100}} 
                transition={{duration:1.5}} 
                className="my-20 text-center text-4xl"
            >
                {/* Marketing Agency */}
            </motion.h2>
            <motion.div 
                whileInView={{opacity:1}} 
                initial={{opacity:0}} 
                transition={{duration:1.5}} 
                className="flex justify-center items-center px-4"
            >
               <div className="border-4 border-neutral-800 rounded-xl p-8 max-w-2xl hover:border-neutral-700 transition-colors text-center">
                    <a 
                        href="https://1st-marketing.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <h3 className="text-4xl font-bold mb-6 italic tracking-wide">1'st Marketing</h3>
                        <p className="text-lg mb-6">Are you a business owner looking to scale - retain clients through copywriting and sales funnels? - </p>
                        <span className="text-xl font-semibold text-[#5fbca3] hover:underline">CLICK HERE</span>
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Technologies; 