const fs = require('fs');
const path = require('path');

// Function to extract metadata from blog post filenames
function extractBlogMetadata(filename) {
  // Remove .tsx extension
  const nameWithoutExtension = filename.replace('.tsx', '');
  
  // Try to extract date from filename (assuming format like ai-quantum-computing-2025)
  let date = '2025-12-01';
  const yearMatch = nameWithoutExtension.match(/(\d{4})$/);
  if (yearMatch) {
    date = `${yearMatch[1]}-12-01`;
  }
  
  // Format title from filename
  const title = formatTitleFromFileName(nameWithoutExtension);
  
  return {
    id: nameWithoutExtension,
    title: title,
    excerpt: `Explore this comprehensive guide on ${title.toLowerCase()}`,
    date: date,
    author: 'AI Vault Technology Team',
    readTime: `${Math.floor(Math.random() * 10) + 5} min read`
  };
}

// Helper function to format title from filename
function formatTitleFromFileName(fileName) {
  // Remove date numbers at the end
  const cleanedName = fileName.replace(/-\d{4}$/, '');
  
  // Split by hyphens and capitalize each word
  return cleanedName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Function to get all blog posts from a directory
function getAllBlogPostsFromDirectory(directory) {
  try {
    const fullPath = path.join(process.cwd(), directory);
    
    if (!fs.existsSync(fullPath)) {
      return [];
    }
    
    const files = fs.readdirSync(fullPath);
    
    // Filter for .tsx files and extract metadata
    const blogPosts = files
      .filter(file => file.endsWith('.tsx') && file !== 'index.tsx')
      .map(file => extractBlogMetadata(file))
      .sort((a, b) => b.date.localeCompare(a.date)); // Sort by date, newest first
    
    return blogPosts;
  } catch (error) {
    console.error('Error reading blog posts from directory:', error);
    return [];
  }
}

// Function to paginate blog posts
function paginateBlogPosts(posts, page, pageSize) {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return posts.slice(startIndex, endIndex);
}

module.exports = {
  extractBlogMetadata,
  formatTitleFromFileName,
  getAllBlogPostsFromDirectory,
  paginateBlogPosts
};