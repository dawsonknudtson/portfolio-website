import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [posts, setPosts] = useState([]);
    const [displayedPosts, setDisplayedPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const POSTS_PER_PAGE = 10;

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const response = await fetch('/blog-index.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch blog posts');
                }
                const blogPosts = await response.json();
                setPosts(blogPosts);
                setDisplayedPosts(blogPosts.slice(0, POSTS_PER_PAGE));
                setLoading(false);
            } catch (err) {
                console.error('Error loading blog posts:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        loadPosts();
    }, []);

    const loadMorePosts = () => {
        const nextPage = currentPage + 1;
        const startIndex = 0;
        const endIndex = nextPage * POSTS_PER_PAGE;
        setDisplayedPosts(posts.slice(startIndex, endIndex));
        setCurrentPage(nextPage);
    };

    const hasMorePosts = displayedPosts.length < posts.length;

    if (loading) {
        return (
            <div className="flex flex-col justify-center min-h-screen pt-24 sm:pt-32">
                <div className="max-w-2xl w-full px-4 sm:px-6 mx-auto text-center">
                    <p className="text-gray-600 dark:text-gray-400">Loading blog posts...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col justify-center min-h-screen pt-24 sm:pt-32">
                <div className="max-w-2xl w-full px-4 sm:px-6 mx-auto text-center">
                    <p className="text-red-500">Error loading posts: {error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-start min-h-screen pt-24 sm:pt-32">
            <div className="max-w-2xl w-full px-4 sm:px-6 mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >                
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Thoughts, ideas, and insights
                    </p>
                </motion.div>

                {/* Blog Posts */}
                {posts.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center py-12"
                    >
                        <p className="text-gray-600 dark:text-gray-400">No blog posts yet. Stay tuned!</p>
                    </motion.div>
                ) : (
                    <div className="space-y-8">
                        {displayedPosts.map((post, index) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="border-b border-gray-300 dark:border-gray-700 pb-8 last:border-b-0"
                            >
                                <Link 
                                    to={`/blog/${post.slug}`}
                                    className="group block"
                                >
                                    <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-[#5fbca3] transition-colors">
                                        {post.title}
                                    </h2>
                                    
                                    {post.summary && (
                                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                            {post.summary}
                                        </p>
                                    )}
                                    
                                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
                                        <time>
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </time>
                                        
                                        {post.tags && post.tags.length > 0 && (
                                            <div className="flex gap-2">
                                                {post.tags.slice(0, 3).map(tag => (
                                                    <span 
                                                        key={tag}
                                                        className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md text-xs"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                        
                        {/* Load More Button */}
                        {hasMorePosts && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className="text-center pt-8"
                            >
                                <button
                                    onClick={loadMorePosts}
                                    className="px-6 py-3 border border-[#5fbca3] text-[#5fbca3] rounded-lg hover:bg-[#5fbca3] hover:text-white transition-colors"
                                >
                                    Load More Posts ({posts.length - displayedPosts.length} remaining)
                                </button>
                            </motion.div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero;