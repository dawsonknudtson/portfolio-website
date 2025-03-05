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
            <div class="prose prose-invert max-w-none">
                <p class="text-2xl font-bold mb-6">Some of the valuable skills that I am currently learning include:</p>
                
                <ul class="list-disc pl-6 mb-8">
                    <li class="text-xl mb-2">Programming</li>
                    <li class="text-xl mb-2">Marketing</li>
                    <li class="text-xl mb-2">Sales</li>
                    <li class="text-xl mb-2">Soft skills - improving communication and organization of thoughts/notes/projects</li>
                </ul>
                
                <p class="text-xl font-semibold mb-4">Why these skills?</p>
                
                <p class="mb-6">Now most people reading this could agree that these are valuable skills. However I don't think everyone should hop on the bandwagon of learning skills for 1. the sake of learning skills or 2. learning a skills because some guru tells you too.</p>
                
                <p class="mb-6">Personally I am only learning these skills because they interest me - and fortunately enough these skills pay money. I have been programming for about 2 years and still feel like I know nothing.</p>
                
                <p class="mb-6">Sometimes I take days-weeks-months off of programming and it frustrates me, because i enjoy it a lot. Not really the code but more so the thought process behind it - being able to design whatever I want and then able to create it real time for myself is very rewarding. Then the creativity - most of the time I can solve problems or create things any way I want without being told what to do which is always a plus.</p>
                
                <p class="text-xl font-semibold mb-4">Sales and Marketing</p>
                
                <p class="mb-6">These skills are basically the same it's just one is 1-1 and the other is 1-many. I'm learning this because I truly feel that with how everything being digitalized - if you can capture someone attention is 3 seconds or less you can sell them something. As for marketing i've mainly been learning copywriting just because I feel it's the most important part, along with sales funnels and customer/client journey- stuff like that. Both of these skills in my opinion require you to know 2 specific things in order to be decent at these. Those are understanding human psychology as well as understand your audience.</p>
                
                <p class="text-xl font-semibold mb-4">Soft Skills</p>
                
                <p class="mb-6">These are pretty self explanatory - Being able to not only communicate to someone but to communicate articulately and effectively is the backbone of every other skill. Then with organization it's an interesting one - lots of trail and error - seeing what works for me personally and what doesn't. I personally find that having a todo list is super helpful - if and only if you don't obsess over completing it. In the past i've tried to eliminate a todo list and just work and it just clouds up my mind with lots of nonsense.</p>
                
                <p class="text-xl font-semibold mb-4">Adaptability</p>
                
                <p class="mb-6">Another skill I should've added to the top is adaptability. Some people might consider this a trait - I would argue it's a skill you learn over time. To put it bluntly - these are some tough times. Everything being digital, AI taking everyone's jobs(sooner rather than later), and then changes to financial systems like the introduction to crypto, nft's(scam) and online money. Being able to navigate during these times can be tough - However i've learned to sort of "ride the wave" and be at the forefront of these changes and I certainly don't think I will regret it.</p>
            </div>
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