const fs = require('fs');

// Read the tools file
const content = fs.readFileSync('./data/tools.ts', 'utf8');

// Split by tool objects
const toolObjects = content.split(/\n\s*\{\s*\n/).slice(1); // Skip the first part which is the export line

// Look for tools in the &quot;Image Generation&quot; category
let foundTools = [];

console.log('Searching for tools in &quot;Image Generation&quot; category...\n');

toolObjects.forEach((toolStr, index) => {
  if (toolStr.includes('Image Generation')) {
    // Extract the category
    const categoryMatch = toolStr.match(/&quot;category&quot;:\s*&quot;([^&quot;]+)&quot;/);
    const category = categoryMatch ? categoryMatch[1] : 'Unknown';
    
    // Extract the name
    const nameMatch = toolStr.match(/&quot;name&quot;:\s*&quot;([^&quot;]+)&quot;/);
    const name = nameMatch ? nameMatch[1] : 'Unknown';
    
    // Extract the subcategory
    const subcategoryMatch = toolStr.match(/&quot;subcategory&quot;:\s*&quot;([^&quot;]+)&quot;/);
    const subcategory = subcategoryMatch ? subcategoryMatch[1] : 'Unknown';
    
    // Extract the description
    const descriptionMatch = toolStr.match(/&quot;description&quot;:\s*&quot;([^&quot;]+)&quot;/);
    const description = descriptionMatch ? descriptionMatch[1] : 'No description';
    
    // Extract the rating
    const ratingMatch = toolStr.match(/&quot;rating&quot;:\s*([0-9.]+)/);
    const rating = ratingMatch ? parseFloat(ratingMatch[1]) : 0;
    
    foundTools.push({
      name: name,
      category: category,
      subcategory: subcategory,
      description: description,
      rating: rating
    });
  }
});

console.log(`Found ${foundTools.length} tools in &quot;Image Generation&quot; category:`);
foundTools.forEach((tool, index) => {
  console.log(`${index + 1}. ${tool.name}`);
  console.log(`   Category: ${tool.category}`);
  console.log(`   Subcategory: ${tool.subcategory}`);
  console.log(`   Rating: ${tool.rating}`);
  console.log(`   Description: ${tool.description}`);
  console.log('');
});

// Check what subcategories exist in the &quot;Image Generation&quot; category
let subcategories = new Set();
foundTools.forEach(tool => {
  subcategories.add(tool.subcategory);
});

console.log('\nSubcategories in &quot;Image Generation&quot; category:');
Array.from(subcategories).forEach(subcategory => {
  console.log(&apos;-&apos;, subcategory);
});