import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
      <div className="flex justify-center space-x-8 text-2xl">
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="hover:text-[#DB0042] transition-colors" />
        </a>
        <a href="https://x.com/dawsonknudtson" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-[#DB0042] transition-colors" />
        </a>
        <a href="https://www.instagram.com/dawsonknudtson/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-[#DB0042] transition-colors" />
        </a>
      </div>
    </div>
  )
}

export default Contact