const fs = require('fs');

// Read the tools file
const content = fs.readFileSync('./data/tools.ts', 'utf8');

// Split by tool objects
const toolObjects = content.split(/\n\s*\{\s*\n/).slice(1); // Skip the first part which is the export line

let retailSubcategories = new Set();

console.log('Finding subcategories in &quot;AI for Retail&quot; category...');

toolObjects.forEach((toolStr, index) => {
  if (toolStr.includes('&quot;category&quot;: &quot;AI for Retail&quot;')) {
    const subcategoryMatch = toolStr.match(/&quot;subcategory&quot;:\s*&quot;([^&quot;]+)&quot;/);
    if (subcategoryMatch) {
      retailSubcategories.add(subcategoryMatch[1]);
    }
  }
});

console.log('\nSubcategories in &quot;AI for Retail&quot; category:');
let count = 1;
Array.from(retailSubcategories).forEach(subcategory => {
  console.log(`${count}. ${subcategory}`);
  count++;
});

console.log(`\nTotal subcategories: ${retailSubcategories.size}`);