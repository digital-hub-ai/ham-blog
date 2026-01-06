const fs = require('fs');

// Read the tools file
const content = fs.readFileSync('./data/tools.ts', 'utf8');

// Split by tool objects
const toolObjects = content.split(/\n\s*\{\s*\n/).slice(1); // Skip the first part which is the export line

// Look for tools in the &quot;AI & Generative Art&quot; category
let foundTools = [];

console.log('Searching for tools in &quot;AI & Generative Art&quot; category...\n');

toolObjects.forEach((toolStr, index) => {
  if (toolStr.includes('AI & Generative Art')) {
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
    
    foundTools.push({
      name: name,
      category: category,
      subcategory: subcategory,
      description: description
    });
  }
});

console.log(`Found ${foundTools.length} tools in &quot;AI & Generative Art&quot; category:`);
foundTools.forEach((tool, index) => {
  console.log(`${index + 1}. ${tool.name}`);
  console.log(`   Category: ${tool.category}`);
  console.log(`   Subcategory: ${tool.subcategory}`);
  console.log(`   Description: ${tool.description}`);
  console.log('');
});

// Also check what categories contain &quot;Art&quot;
console.log('\nSearching for categories containing &quot;Art&quot;...');
let artCategories = new Set();

toolObjects.forEach((toolStr, index) => {
  const categoryMatch = toolStr.match(/&quot;category&quot;:\s*&quot;([^&quot;]+)&quot;/);
  if (categoryMatch && categoryMatch[1].includes('Art')) {
    artCategories.add(categoryMatch[1]);
  }
});

console.log('\nCategories containing &quot;Art&quot;:');
Array.from(artCategories).forEach(category => {
  console.log(&apos;-&apos;, category);
});