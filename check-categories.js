const fs = require('fs');

// Read the tools file
const content = fs.readFileSync('./data/tools.ts', 'utf8');
const lines = content.split('\n');

// Find all unique categories
const categories = new Set();

lines.forEach(line => {
  if (line.includes('&quot;category&quot;:')) {
    const match = line.match(/&quot;category&quot;:\s*&quot;([^&quot;]+)&quot;/);
    if (match) {
      categories.add(match[1]);
    }
  }
});

console.log('Unique categories in tools database:');
Array.from(categories).forEach(category => {
  console.log(&apos;-&apos;, category);
});

console.log(&apos;\nTotal unique categories:&apos;, categories.size);