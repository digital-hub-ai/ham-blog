const fs = require(&apos;fs&apos;);
const path = require(&apos;path&apos;);

function escapeHtml(text) {
  return text
    .replace(/&/g, &quot;&amp;&quot;)
    .replace(/</g, &quot;&lt;&quot;)
    .replace(/>/g, &quot;&gt;&quot;)
    .replace(/&quot;/g, &quot;&quot;&quot;)
    .replace(/&apos;/g, &quot;&#039;&quot;);
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, &apos;utf8&apos;);
    const originalContent = content;
    
    // Fix common unescaped patterns in JSX text
    content = content.replace(/(?<!=)&apos;(?![^<]*>)/g, &apos;&apos;&apos;);
    content = content.replace(/(?<!=)&quot;/g, '&quot;');
    
    // Fix specific patterns in JSX attributes
    content = content.replace(/className="([^&quot;]*[^\\])([^&quot;]*)&quot;/g, (match, p1, p2) => 
      `className="${p1}${p2}&quot;`.replace(/&apos;/g, &apos;&apos;&apos;)
    );
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, &apos;utf8&apos;);
      console.log(`Fixed ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
  return false;
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: true });
  let fixedCount = 0;
  
  for (const file of files) {
    const fullPath = path.join(directory, file.name);
    
    if (file.isDirectory()) {
      // Skip node_modules and .next directories
      if (file.name === &apos;node_modules&apos; || file.name === &apos;.next&apos;) {
        continue;
      }
      fixedCount += processDirectory(fullPath);
    } else if (file.name.match(/\.(tsx|jsx|ts|js)$/)) {
      if (fixFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start processing from the current directory
const rootDir = path.join(__dirname);
console.log(`Starting to fix files in ${rootDir}...`);
const fixedCount = processDirectory(rootDir);
console.log(`Fixed ${fixedCount} files.`);
