import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const blogPosts = {
    "whats-happening-with-crypto": {
        title: "Whats Happening with crypto?",
        date: "Febuary 28, 2025",
        content: `
            Crypto is a powerful technology for building user interfaces.
           
            
            [Full blog post content would go here...]
        `
    },
    "skills-i-am-learning-and-why": {
        title: "Skills I am learning and why?",
        date: "Febuary 28, 2025",
        content: `
            --
            
            [Full blog post content would go here...]
        `
    },
    "ai-in-software-engineering": {
        title: "How AI is going to affect not just software engineering but all industries",
        date: "Febuary 28, 2025",
        content: `
            Artificial Intelligence is revolutionizing how we approach software development.
            From code generation to testing, AI tools are becoming essential
            in a developer's toolkit.
            
            [Full blog post content would go here...]
        `
    }
};

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts[slug];

    if (!post) {
        return (
            <div className="min-h-screen p-8">
                <h1 className="text-2xl font-bold">Post not found</h1>
            </div>
        );
    }

    return (
        <motion.div 
            className="min-h-screen p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-neutral-500 mb-8">{post.date}</p>
            <div className="prose prose-invert">
                <p className="whitespace-pre-line">{post.content}</p>
            </div>
        </motion.div>
    );
};

export default BlogPost; 