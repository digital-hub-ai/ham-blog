const fs = require(&apos;fs&apos;);

// Read the tools file
const toolsData = fs.readFileSync(&apos;./data/tools.ts&apos;, &apos;utf8&apos;);

// Extract all unique categories and subcategories
const categories = new Set();
const subcategories = new Set();

// Split the file into lines and process
const lines = toolsData.split(&apos;\n&apos;);

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes(&apos;&quot;category&quot;:&apos;)) {
    const categoryMatch = line.match(/&quot;category&quot;:\s*&quot;([^&quot;]+)&quot;/);
    if (categoryMatch) {
      categories.add(categoryMatch[1]);
    }
  }
  if (line.includes(&apos;&quot;subcategory&quot;:&apos;)) {
    const subcategoryMatch = line.match(/&quot;subcategory&quot;:\s*&quot;([^&quot;]+)&quot;/);
    if (subcategoryMatch) {
      subcategories.add(subcategoryMatch[1]);
    }
  }
}

console.log(&apos;Unique categories found:&apos;);
console.log(Array.from(categories).sort());

console.log(&apos;\nUnique subcategories found:&apos;);
console.log(Array.from(subcategories).sort());

// Look for tools with &quot;Image Generation&quot; category specifically
console.log(&apos;\nSearching for tools with &quot;Image Generation&quot; category...&apos;);
let imageGenCount = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes(&apos;&quot;category&quot;: &quot;Image Generation&quot;&apos;)) {
    imageGenCount++;
  }
}
console.log(`Found ${imageGenCount} tools with &quot;Image Generation&quot; category`);

// Look for tools with &quot;AI & Generative Art&quot; subcategory
console.log(&apos;\nSearching for tools with &quot;AI & Generative Art&quot; subcategory...&apos;);
let generativeArtCount = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes(&apos;&quot;subcategory&quot;: &quot;AI & Generative Art&quot;&apos;)) {
    generativeArtCount++;
  }
}
console.log(`Found ${generativeArtCount} tools with &quot;AI & Generative Art&quot; subcategory`);