const fs = require(&apos;fs&apos;);

// Read the tools file
const toolsData = fs.readFileSync(&apos;./data/tools.ts&apos;, &apos;utf8&apos;);
const lines = toolsData.split(&apos;\n&apos;);

console.log(&apos;=== TOOLS IN SOCIAL MEDIA MANAGEMENT CATEGORY ===');

let inSocialMediaCategory = false;
let currentTool = [];
let toolCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // Check if we're entering a Social Media Management tool
  if (line.includes('&quot;category&quot;: &quot;Social Media Management&quot;')) {
    inSocialMediaCategory = true;
    currentTool = [line];
    continue;
  }
  
  // If we're in a Social Media Management tool, collect all lines until we hit the end
  if (inSocialMediaCategory) {
    currentTool.push(line);
    
    // Check if this is the end of the tool
    if (line.includes('},')) {
      toolCount++;
      console.log(`\n--- Tool ${toolCount} ---`);
      currentTool.forEach(toolLine => console.log(toolLine));
      inSocialMediaCategory = false;
      currentTool = [];
    }
  }
}

console.log(`\nTotal tools found in Social Media Management category: ${toolCount}`);

// Also check for tools with AI prefix
console.log(&apos;\n=== TOOLS IN AI FOR SOCIAL MEDIA MANAGEMENT CATEGORY ===');

let inAISocialMediaCategory = false;
let currentAITool = [];
let aiToolCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // Check if we're entering an AI Social Media Management tool
  if (line.includes('&quot;category&quot;: &quot;AI for Social Media Management&quot;')) {
    inAISocialMediaCategory = true;
    currentAITool = [line];
    continue;
  }
  
  // If we're in an AI Social Media Management tool, collect all lines until we hit the end
  if (inAISocialMediaCategory) {
    currentAITool.push(line);
    
    // Check if this is the end of the tool
    if (line.includes('},')) {
      aiToolCount++;
      console.log(`\n--- AI Tool ${aiToolCount} ---`);
      currentAITool.forEach(toolLine => console.log(toolLine));
      inAISocialMediaCategory = false;
      currentAITool = [];
    }
  }
}

console.log(`\nTotal tools found in AI for Social Media Management category: ${aiToolCount}`);