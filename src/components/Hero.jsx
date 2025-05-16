import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                // In development, use import.meta.glob
                if (import.meta.env.DEV) {
                    const rawPosts = import.meta.glob('/public/posts/*.mdx', { 
                        eager: true,
                        as: 'raw'
                    });

                    const { default: matter } = await import('gray-matter');

                    const postsArray = Object.entries(rawPosts).map(([path, content]) => {
                        const slug = path.split('/').pop().replace('.mdx', '');
                        const { data: frontmatter } = matter(content);
                        
                        return {
                            title: frontmatter.title || 'Untitled',
                            date: frontmatter.date || new Date().toISOString(),
                            summary: frontmatter.summary || '',
                            slug
                        };
                    });

                    const validPosts = postsArray.sort((a, b) => 
                        new Date(b.date) - new Date(a.date)
                    );
                    
                    setPosts(validPosts);
                } else {
                    // In production, fetch from public URL
                    const response = await fetch('/posts/index.json');
                    if (!response.ok) {
                        throw new Error('Failed to fetch posts index');
                    }
                    const posts = await response.json();
                    setPosts(posts);
                }
            } catch (err) {
                setError(err.message);
                console.error('Error loading posts:', err);
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