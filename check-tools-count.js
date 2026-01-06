const fs = require(&apos;fs&apos;);

try {
  const data = JSON.parse(fs.readFileSync(&apos;data/ai-tools-database.json&apos;, &apos;utf8&apos;));
  console.log(&apos;Total AI tools in database:&apos;, data.length);
  console.log(&apos;First tool:&apos;, JSON.stringify(data[0], null, 2));
  console.log(&apos;Last tool:&apos;, JSON.stringify(data[data.length - 1], null, 2));
} catch (error) {
  console.error(&apos;Error reading or parsing JSON file:&apos;, error.message);
}