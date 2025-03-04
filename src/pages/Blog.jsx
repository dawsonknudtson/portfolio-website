import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import bitcoin from "../images/bitcoin.jpg"

const blogPosts = {
    "whats-happening-with-crypto": {
        title: "Whats Happening with crypto?",
        date: "Febuary 28, 2025",
        content: `
            <div class="prose prose-invert max-w-none">
                <p class="text-2xl font-bold mb-6">My view on the current crypto economy can be summed up in one word:</p>
                
                <p class="text-3xl font-bold text-[#DB0042] mb-8">confused</p>
                
                <p class="text-xl font-semibold mb-4">why?</p>
                
                <p class="mb-6">Because this is what happens when public authority realizes what power they hold and the damage they can do - large corporations buying tremendous amounts of crypto, causing lots of public investors to give into the FOMO they think they have and then when the price goes from a lower lower to a lower high - these large corporations just sell the profits.</p>
                
                <p class="mb-6">Although I don't really care because crypto is every man for himself, it's such a shame seeing what this economy has - is heading towards. Watching the U.S president drop a coin - followed by multiple countries just to rug pull everyone is truly a sad thing to see.</p>
                
                <p class="mb-6">On the bright side - I personally think this is just the start of the bullrun - although bitcoin has broken ATH I think we are bound to see a 150k BTC by the end of the year. However that does not go without saying that it's going to be sunshine and rainbows - I think the market will continue to bleed through March and possibly April.</p>
                
                <p class="mb-6">Going back to my main point as to why I am confused - I sometimes ask myself how did it get this bad - just the amount of rug pulls on Solana and influencer scams. I guess it has been going on for a while - but it's really interesting to be alive during this time.</p>
                
                <p class="mb-6">Personally I am holding only a couple of tokens this cycle including XRP, ETH, BRETT, RNDR and will possibly get back into some others I was holding like KAS and DOGE.</p>
            </div>
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
            {post.title === "Whats Happening with crypto?" && (
                <div className="mb-8">
                    <img src={bitcoin} alt="Bitcoin Market Analysis" className="w-full h-[400px] object-cover rounded-xl shadow-lg" />
                </div>
            )}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </motion.div>
    );
};

export default BlogPost; 