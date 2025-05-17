import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react/lib/index.js';
import * as jsxRuntime from 'react/jsx-runtime';
import { evaluate } from '@mdx-js/mdx';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPost = async () => {
            try {
                let content;
                let postInfo;

                // Unified loading approach for both dev and prod
                const [contentRes, indexRes] = await Promise.all([
                    fetch(`/posts/${slug}.mdx`),
                    fetch('/posts/index.json')
                ]);

                if (!contentRes.ok || !indexRes.ok) {
                    throw new Error('Failed to fetch post or index');
                }

                content = await contentRes.text();
                const index = await indexRes.json();
                postInfo = index.find(p => p.slug === slug);

                if (!postInfo) {
                    throw new Error('Post not found in index');
                }

                console.log('Loaded post content:', content.slice(0, 100) + '...');
                console.log('Post info:', postInfo);

                // Compile and evaluate MDX content with proper runtime
                const { default: Content } = await evaluate(content, {
                    ...jsxRuntime,
                    development: false
                });

                setPost({
                    ...postInfo,
                    Content
                });
            } catch (err) {
                console.error('Error loading post:', err);
                setError(err.message);
            }
        };

        loadPost();
    }, [slug]);

    if (error) {
        return (
            <div className="flex flex-col justify-start min-h-screen pt-24 sm:pt-32">
                <div className="max-w-2xl w-full px-4 sm:px-6 mx-auto">
                    <p className="text-red-500">{error}</p>
                    <Link to="/" className="text-[#5fbca3] mt-4 inline-block">
                        ← Back to blog
                    </Link>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="flex flex-col justify-start min-h-screen pt-24 sm:pt-32">
                <div className="max-w-2xl w-full px-4 sm:px-6 mx-auto">
                    <p>Loading post...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-start min-h-screen pt-24 sm:pt-32">
            <div className="max-w-2xl w-full px-4 sm:px-6 mx-auto">
                <Link to="/" className="text-[#5fbca3] mb-8 inline-block">
                    ← Back to blog
                </Link>
                
                <article className="prose prose-invert max-w-none text-left">
                    <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>
                    <time className="text-sm text-gray-400 block mb-12">
                        {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                    <div className="text-white">
                        <MDXProvider>
                            <post.Content />
                        </MDXProvider>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BlogPost; 