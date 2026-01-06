const fs = require('fs');
const path = require('path');

const directory = './pages/blog';

function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix Chrono-Wanderer's Atlas
    content = content.replace(/Chrono-Wanderer's Atlas/g, &quot;Chrono-Wanderer&apos;s Atlas&quot;);
    
    // Fix Traveler's Tip
    content = content.replace(/Traveler's Tip/g, &quot;Traveler&apos;s Tip&quot;);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      try {
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          walkDir(filePath);
        } else if (filePath.endsWith(&apos;.tsx&apos;) || filePath.endsWith(&apos;.jsx&apos;) || filePath.endsWith(&apos;.js&apos;)) {
          processFile(filePath);
        }
      } catch (error) {
        console.error(`❌ Error accessing ${filePath}:`, error.message);
      }
    });
  } catch (error) {
    console.error(`❌ Error reading directory ${dir}:`, error.message);
  }
}

console.log(&apos;🚀 Starting to fix unescaped entities...&apos;);
walkDir(directory);
console.log(&apos;✨ Finished processing files&apos;);
