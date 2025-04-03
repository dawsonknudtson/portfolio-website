import matter from 'gray-matter';

export async function getBlogPosts() {
    const blogFiles = import.meta.glob('/src/blogs/*.mdx');
    const posts = [];

    for (const path in blogFiles) {
        const file = await blogFiles[path]();
        const slug = path.split('/').pop().replace('.mdx', '');
        const { data } = matter(file.default);
        
        posts.push({
            ...data,
            slug,
            preview: data.preview || data.content.split(' ').slice(0, 50).join(' ') + '...'
        });
    }

    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
} 