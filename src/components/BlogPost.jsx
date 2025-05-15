import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react/lib/index.js';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPost = async () => {
            try {
                const modules = import.meta.glob('/src/posts/*.mdx', { 
                    eager: true,
                    import: 'default'
                });

                const postModule = Object.entries(modules).find(
                    ([path]) => path.includes(slug)
                );

                if (!postModule) {
                    throw new Error('Post not found');
                }

                const rawContent = await import(`/src/posts/${slug}.mdx?raw`);
                const matter = (await import('gray-matter')).default;
                const { data: frontmatter } = matter(rawContent.default);

                setPost({
                    ...frontmatter,
                    slug,
                    Content: postModule[1]
                });
            } catch (err) {
                setError(err.message);
            }
        };

        loadPost();
    }, [slug]);

    if (error) {
        return (
            <div className="flex flex-col justify-start min-h-screen pt-24 sm:pt-32">
                <div className="max-w-2xl w-full px-4 sm:px-6">
                    <p className="text-red-500">{error}</p>
                    <Link to="/" className="text-blue-500 mt-4 inline-block">
                        ← Back to blog
                    </Link>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="flex flex-col justify-start min-h-screen pt-24 sm:pt-32">
                <div className="max-w-2xl w-full px-4 sm:px-6">
                    <p>Loading post...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-start min-h-screen pt-24 sm:pt-32">
            <div className="max-w-2xl w-full px-4 sm:px-6">
                <Link to="/" className="text-blue-500 mb-8 inline-block">
                    ← Back to blog
                </Link>
                
                <article className="prose max-w-none">
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                    <time className="text-sm text-gray-500 block mb-8">
                        {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                    <MDXProvider>
                        <post.Content />
                    </MDXProvider>
                </article>
            </div>
        </div>
    );
};

export default BlogPost; 