import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPost = async () => {
            try {
                //  Load blog index to get post metadata
                const indexResponse = await fetch('/blog-index.json');
                if (!indexResponse.ok) {
                    throw new Error('Failed to fetch blog index');
                }
                const posts = await indexResponse.json();
                const postData = posts.find(p => p.slug === slug);
                
                if (!postData) {
                    throw new Error('Post not found');
                }

                // Load the actual markdown content
                const contentResponse = await fetch(`/content/posts/${postData.filename}`);
                if (!contentResponse.ok) {
                    throw new Error('Failed to fetch post content');
                }
                const markdownContent = await contentResponse.text();
                
                // Remove frontmatter for display (basic approach)
                const contentWithoutFrontmatter = markdownContent.replace(/^---[\s\S]*?---\n/, '');
                
                setPost(postData);
                setContent(contentWithoutFrontmatter);
                setLoading(false);
            } catch (err) {
                console.error('Error loading post:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        loadPost();
    }, [slug]);

    // Simple markdown-to-HTML conversion (basic)
    const renderMarkdown = (markdown) => {
        return markdown
            .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">$1</h1>')
            .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">$1</h2>')
            .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-white">$1</h3>')
            .replace(/\*\*(.*)\*\*/gim, '<strong class="font-semibold text-gray-900 dark:text-white">$1</strong>')
            .replace(/\*(.*)\*/gim, '<em class="italic text-gray-800 dark:text-gray-200">$1</em>')
            .replace(/^\- (.*$)/gim, '<li class="mb-2">$1</li>')
            .replace(/^\d+\. (.*$)/gim, '<li class="mb-2">$1</li>')
            .replace(/\n\n/gim, '</p><p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">')
            .replace(/^(.*)$/gim, '<p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">$1</p>')
            .replace(/<p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"><\/p>/gim, '')
            .replace(/(<li.*<\/li>)/s, '<ul class="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">$1</ul>');
    };

    if (loading) {
        return (
            <div className="flex flex-col justify-start min-h-screen pt-24 sm:pt-32">
                <div className="max-w-2xl w-full px-4 sm:px-6 mx-auto">
                    <p className="text-gray-600 dark:text-gray-400">Loading post...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col justify-start min-h-screen pt-24 sm:pt-32">
                <div className="max-w-2xl w-full px-4 sm:px-6 mx-auto">
                    <p className="text-red-500 mb-4">Error: {error}</p>
                    <Link to="/" className="text-[#5fbca3] hover:underline">
                        ← Back to blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-start min-h-screen pt-24 sm:pt-32">
            <div className="max-w-2xl w-full px-4 sm:px-6 mx-auto">
                <Link 
                    to="/" 
                    className="text-[#5fbca3] hover:underline mb-8 inline-block"
                >
                    ← Back to blog
                </Link>
                
                <article className="prose prose-invert max-w-none">
                    <header className="mb-8">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            {post.title}
                        </h1>
                        
                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-6">
                            <time>
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </time>
                            
                            {post.tags && post.tags.length > 0 && (
                                <div className="flex gap-2">
                                    {post.tags.map(tag => (
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
                    </header>
                    
                    <div 
                        className="prose-content"
                        dangerouslySetInnerHTML={{ 
                            __html: renderMarkdown(content) 
                        }}
                    />
                </article>
            </div>
        </div>
    );
};

export default BlogPost; 