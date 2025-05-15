import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const rawPosts = import.meta.glob('/src/posts/*.mdx', { 
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
            } catch (err) {
                setError(err.message);
            }
        };
        loadPosts();
    }, []);

    if (error) {
        return (
            <div className="flex flex-col justify-start min-h-screen pt-24 sm:pt-32">
                <div className="max-w-2xl w-full px-4 sm:px-6">
                    <p className="text-red-500">Error loading posts: {error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-start min-h-screen pt-24 sm:pt-32">
            <div className="max-w-2xl w-full px-4 sm:px-6">
                {posts.length === 0 ? (
                    <p>Loading posts...</p>
                ) : (
                    <div className="space-y-12">
                        {posts.map((post) => {
                            console.log('Rendering post:', post); // Log each post as it's rendered
                            return (
                                <article key={post.slug} className="border-b border-gray-200 pb-8">
                                    <h2 className="text-2xl font-semibold mb-2">
                                        <Link to={`/blog/${post.slug}`} className="hover:text-blue-500 transition-colors">
                                            {post.title}
                                        </Link>
                                    </h2>
                                    {post.summary && (
                                        <p className="text-gray-600 mb-4">
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