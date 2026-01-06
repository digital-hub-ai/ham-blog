const fs = require('fs');

// Read the tools file
const content = fs.readFileSync('./data/tools.ts', 'utf8');
const lines = content.split('\n');

// Find tools in the &quot;AI for Retail&quot; category
let toolCount = 0;
let currentTool = {};
let inToolBlock = false;

console.log('Tools in &quot;AI for Retail&quot; category:');

lines.forEach((line, index) => {
  // Check if we&apos;re starting a new tool
  if (line.trim() === &apos;{&apos; && lines[index-1] && lines[index-1].includes(&apos;//&apos;) === false) {
    inToolBlock = true;
    currentTool = {};
  }
  
  // Check if we&apos;re ending a tool
  if (line.trim() === &apos;}&apos; && inToolBlock) {
    inToolBlock = false;
    if (currentTool.category === &apos;AI for Retail&apos;) {
      toolCount++;
      console.log(`${toolCount}. ${currentTool.name} - ${currentTool.subcategory}`);
      console.log(`   ${currentTool.description}`);
      console.log(`   Rating: ${currentTool.rating}`);
      console.log(&apos;&apos;);
    }
    currentTool = {};
  }
  
  // Extract properties if we&apos;re in a tool block
  if (inToolBlock) {
    const categoryMatch = line.match(/&quot;category&quot;:\s*&quot;([^&quot;]+)&quot;/);
    if (categoryMatch) {
      currentTool.category = categoryMatch[1];
    }
    
    const nameMatch = line.match(/&quot;name&quot;:\s*&quot;([^&quot;]+)&quot;/);
    if (nameMatch) {
      currentTool.name = nameMatch[1];
    }
    
    const subcategoryMatch = line.match(/&quot;subcategory&quot;:\s*&quot;([^&quot;]+)&quot;/);
    if (subcategoryMatch) {
      currentTool.subcategory = subcategoryMatch[1];
    }
    
    const descriptionMatch = line.match(/&quot;description&quot;:\s*&quot;([^&quot;]+)&quot;/);
    if (descriptionMatch) {
      currentTool.description = descriptionMatch[1];
    }
    
    const ratingMatch = line.match(/&quot;rating&quot;:\s*([0-9.]+)/);
    if (ratingMatch) {
      currentTool.rating = parseFloat(ratingMatch[1]);
    }
  }
});

console.log(`Total tools in &quot;AI for Retail&quot; category: ${toolCount}`);