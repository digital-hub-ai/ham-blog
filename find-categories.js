const fs = require(&apos;fs&apos;);

// Read the tools file
const toolsData = fs.readFileSync(&apos;./data/tools.ts&apos;, &apos;utf8&apos;);
const lines = toolsData.split(&apos;\n&apos;);

// Extract all unique categories and subcategories from tools file
const categories = new Set();
const subcategories = new Set();

console.log(&apos;Searching for categories and subcategories in tools file...&apos;);

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('&quot;category&quot;:')) {
    const match = line.match(/&quot;category&quot;:\s*&quot;([^&quot;]+)&quot;/);
    if (match) {
      categories.add(match[1]);
    }
  }
  if (line.includes('&quot;subcategory&quot;:')) {
    const match = line.match(/&quot;subcategory&quot;:\s*&quot;([^&quot;]+)&quot;/);
    if (match) {
      subcategories.add(match[1]);
    }
  }
}

console.log('\n=== ALL CATEGORIES IN TOOLS FILE ===');
Array.from(categories).sort().forEach((cat, index) => {
  console.log(`${index + 1}. ${cat}`);
});

console.log('\n=== ALL SUBCATEGORIES IN TOOLS FILE ===');
Array.from(subcategories).sort().forEach((sub, index) => {
  console.log(`${index + 1}. ${sub}`);
});

console.log(`\nTotal unique categories: ${categories.size}`);
console.log(`Total unique subcategories: ${subcategories.size}`);

// Check if &quot;Social Media Management&quot; category exists
console.log('\n=== CHECKING FOR SOCIAL MEDIA CATEGORIES ===');
const socialMediaCategories = Array.from(categories).filter(cat => 
  cat.toLowerCase().includes('social') || cat.toLowerCase().includes('media')
);
console.log('Social/media related categories found:', socialMediaCategories);

// Check if &quot;Instagram Management&quot; subcategory exists
console.log('\n=== CHECKING FOR INSTAGRAM SUBCATEGORY ===');
const instagramSubcategories = Array.from(subcategories).filter(sub => 
  sub.toLowerCase().includes(&apos;instagram&apos;)
);
console.log(&apos;Instagram related subcategories found:&apos;, instagramSubcategories);