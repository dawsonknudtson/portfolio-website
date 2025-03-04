import { motion } from "framer-motion";
import firstmarketing from "../assets/1'st.png"; 

const Companies = () => {
    return ( 
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2 
                whileInView={{opacity: 1, y: 0}} 
                initial={{opacity: 0, y: -100}} 
                transition={{duration: 1.5}} 
                className="my-20 text-center text-4xl"
            >
                Marketing Agency
            </motion.h2>
            <motion.div 
                whileInView={{opacity: 1}} 
                initial={{opacity: 0}} 
                transition={{duration: 1.5}} 
                className="flex justify-center items-center px-4"
            >  
                <div className="border-4 border-neutral-800 rounded-xl p-4 max-w-sm hover:border-neutral-700 transition-colors">
                    <a 
                        href="https://1st-marketing.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <img 
                            src={firstmarketing} 
                            alt="1st Marketing Company" 
                            className="w-48 h-auto object-contain mx-auto"
                        />
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Companies;