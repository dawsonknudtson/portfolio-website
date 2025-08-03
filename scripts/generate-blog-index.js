import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_DIR = path.join(__dirname, '../content/posts');
const OUTPUT_FILE = path.join(__dirname, '../public/blog-index.json');

function generateBlogIndex() {
    try {

        if (!fs.existsSync(POSTS_DIR)) {
            fs.mkdirSync(POSTS_DIR, { recursive: true });
            console.log('Created posts directory');
        }

        const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md'));
        
        const posts = files.map(file => {
            const filePath = path.join(POSTS_DIR, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const { data, content } = matter(fileContent);
            
            const stats = fs.statSync(filePath);
            const slug = file.replace('.md', '');
            
            return {
                slug,
                title: data.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                date: data.date || stats.birthtime.toISOString().split('T')[0],
                summary: data.summary || content.substring(0, 150) + '...',
                author: data.author || 'Dawson',
                tags: data.tags || [],
                filename: file
            };
        });

        posts.sort((a, b) => new Date(b.date) - new Date(a.date));

        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));
        console.log(`Generated blog index with ${posts.length} posts`);
        
    } catch (error) {
        console.error('Error generating blog index:', error);
        process.exit(1);
    }
}

generateBlogIndex(); 