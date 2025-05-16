import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDirectory = path.join(process.cwd(), 'public', 'posts');
const outputFile = path.join(process.cwd(), 'public', 'posts', 'index.json');

// Ensure the posts directory exists
if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    console.log('Created posts directory at', postsDirectory);
}

// Read all MDX files and generate index
const files = fs.readdirSync(postsDirectory);
console.log('Found files:', files);

const posts = files
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => {
        const fullPath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data: frontmatter } = matter(fileContents);
        
        console.log('Processing file:', filename, 'with frontmatter:', frontmatter);
        
        return {
            title: frontmatter.title || 'Untitled',
            date: frontmatter.date || new Date().toISOString(),
            summary: frontmatter.summary || '',
            slug: filename.replace('.mdx', '')
        };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

// Write the index file
fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
console.log('Generated posts index with', posts.length, 'posts at', outputFile); 