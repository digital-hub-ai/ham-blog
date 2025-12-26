// Script to organize existing blog posts into reality dimensions
const fs = require('fs');
const path = require('path');
const { blogToRealityMap, getRealityForBlog, getSubCategoryForBlog } = require('../lib/blogMapper');

// Path to blog posts directory
const blogDir = path.join(__dirname, '..', 'pages', 'blog');

// Function to get all blog post files
function getBlogPostFiles() {
  const files = fs.readdirSync(blogDir);
  return files.filter(file => 
    file.endsWith('.tsx') && 
    !file.startsWith('index.') && 
    !['tech.tsx', 'travel.tsx', 'design.tsx', 'business.tsx', 'science.tsx', 'lifestyle.tsx', 'hobby.tsx', 'food.tsx', 'guides.tsx'].includes(file)
  );
}

// Function to create symbolic links or copy files to reality directories
function organizeBlogPosts() {
  const blogFiles = getBlogPostFiles();
  console.log(`Found ${blogFiles.length} blog posts to organize`);
  
  // Track statistics
  const stats = {
    tech: 0,
    travel: 0,
    design: 0,
    business: 0,
    science: 0,
    lifestyle: 0,
    hobby: 0,
    food: 0,
    guides: 0
  };
  
  // Process each blog file
  blogFiles.forEach(file => {
    const reality = getRealityForBlog(file);
    const subCategory = getSubCategoryForBlog(file, reality);
    
    // Update statistics
    stats[reality]++;
    
    // Create reality directory if it doesn't exist
    const realityDir = path.join(blogDir, reality);
    if (!fs.existsSync(realityDir)) {
      fs.mkdirSync(realityDir, { recursive: true });
    }
    
    // Create sub-category directory if it doesn't exist
    const subCategoryDir = path.join(realityDir, subCategory);
    if (!fs.existsSync(subCategoryDir)) {
      fs.mkdirSync(subCategoryDir, { recursive: true });
    }
    
    // Move file to appropriate directory
    const sourcePath = path.join(blogDir, file);
    const destPath = path.join(subCategoryDir, file);
    
    // Check if file already exists in destination
    if (!fs.existsSync(destPath)) {
      try {
        fs.renameSync(sourcePath, destPath);
        console.log(`Moved ${file} to ${reality}/${subCategory}/`);
      } catch (error) {
        console.error(`Failed to move ${file}:`, error.message);
      }
    } else {
      console.log(`${file} already exists in ${reality}/${subCategory}/, skipping...`);
    }
  });
  
  // Print statistics
  console.log('\nOrganization complete!');
  console.log('=====================');
  Object.entries(stats).forEach(([reality, count]) => {
    console.log(`${reality}: ${count} posts`);
  });
}

// Run the organization script
organizeBlogPosts();