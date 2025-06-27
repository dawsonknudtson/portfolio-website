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
        // Create posts directory if it doesn't exist
        if (!fs.existsSync(POSTS_DIR)) {
            fs.mkdirSync(POSTS_DIR, { recursive: true });
            console.log('Created posts directory');
        }

        // Read all markdown files
        const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md'));
        
        const posts = files.map(file => {
            const filePath = path.join(POSTS_DIR, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const { data, content } = matter(fileContent);
            
            // Get file stats for creation date if not in frontmatter
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

        // Sort by date (newest first)
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Write to public directory
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));
        console.log(`Generated blog index with ${posts.length} posts`);
        
    } catch (error) {
        console.error('Error generating blog index:', error);
        process.exit(1);
    }
}

generateBlogIndex(); 