import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDirectory = path.join(process.cwd(), 'public', 'posts');
const outputFile = path.join(process.cwd(), 'public', 'posts', 'index.json');

// Read all MDX files and generate index
const posts = fs.readdirSync(postsDirectory)
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => {
        const fullPath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data: frontmatter } = matter(fileContents);
        
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
console.log('Generated posts index at', outputFile); 