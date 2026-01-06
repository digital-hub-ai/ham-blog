const fs = require(&apos;fs&apos;);

// Read the tools file
const toolsData = fs.readFileSync(&apos;./data/tools.ts&apos;, &apos;utf8&apos;);
const lines = toolsData.split(&apos;\n&apos;);

console.log(&apos;=== SUBCATEGORIES IN SOCIAL MEDIA MANAGEMENT CATEGORY ===');

const subcategories = new Set();

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // Check if we&apos;re in a Social Media Management tool
  if (line.includes(&apos;&quot;category&quot;: &quot;Social Media Management&quot;&apos;)) {
    // Look for the subcategory in the next few lines
    for (let j = i; j < Math.min(i + 10, lines.length); j++) {
      const subLine = lines[j].trim();
      if (subLine.includes('&quot;subcategory&quot;:')) {
        const match = subLine.match(/&quot;subcategory&quot;:\s*&quot;([^&quot;]+)&quot;/);
        if (match) {
          subcategories.add(match[1]);
        }
        break;
      }
    }
  }
}

console.log('Subcategories found:');
Array.from(subcategories).sort().forEach((sub, index) => {
  console.log(`${index + 1}. ${sub}`);
});