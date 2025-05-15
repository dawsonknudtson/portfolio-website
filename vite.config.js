import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mdx({
      providerImportSource: "@mdx-js/react",
      remarkPlugins: [
        remarkParse,
        remarkFrontmatter,
        remarkGfm
      ],
      rehypePlugins: [],
      format: 'mdx',
      recmaPlugins: [],
      development: process.env.NODE_ENV === 'development'
    }),
    react(),
    nodePolyfills({
      include: ['buffer'],
    }),
  ],
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
