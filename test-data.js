const fs = require(&apos;fs&apos;);

// Try to import the data file
try {
  const data = require(&apos;./data/ai-updates.ts&apos;);
  console.log(&apos;Data file loaded successfully&apos;);
  console.log(&apos;Number of entries:&apos;, data.aiUpdates.length);
  console.log(&apos;First entry:&apos;, JSON.stringify(data.aiUpdates[0], null, 2));
} catch (error) {
  console.error(&apos;Error loading data file:&apos;, error.message);
  console.error(error.stack);
}