import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import matter from 'gray-matter';

const Hero = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                // Always fetch from the generated index.json
                const response = await fetch('/posts/index.json');
                
                if (!response.ok) {
                    throw new Error('Failed to fetch posts index');
                }
                
                const posts = await response.json();
                console.log('Loaded posts:', posts);
                setPosts(posts.sort((a, b) => new Date(b.date) - new Date(a.date)));
            } catch (err) {
                console.error('Error loading posts:', err);
                setError(err.message);
            }
        };

        loadPosts();
    }, []);

    if (error) {
        return (
            <div className="flex flex-col justify-start min-h-screen pt-24 sm:pt-32">
                <div className="max-w-2xl w-full px-4 sm:px-6 mx-auto">
                    <p className="text-red-500">Error loading posts: {error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-start min-h-screen pt-24 sm:pt-32">
            <div className="max-w-2xl w-full px-4 sm:px-6 mx-auto">
                {posts.length === 0 ? (
                    <p>Loading posts...</p>
                ) : (
                    <div className="space-y-12">
                        {posts.map((post) => {
                            return (
                                <article key={post.slug} className="pb-8 text-left">
                                    <h2 className="text-2xl font-semibold mb-2">
                                        <Link to={`/blog/${post.slug}`} className="hover:text-[#5fbca3] transition-colors">
                                            {post.title}
                                        </Link>
                                    </h2>
                                    {post.summary && (
                                        <p className="text-gray-400 mb-4">
                                            {post.summary}
                                        </p>
                                    )}
                                    <time className="text-sm text-gray-500">
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </time>
                                </article>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero;