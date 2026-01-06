// Run this script to generate secure secrets for your .env file
// Usage: node scripts/generate-secrets.js

const crypto = require(&apos;crypto&apos;);

function generateSecret(length = 64) {
  return crypto.randomBytes(length).toString(&apos;base64&apos;).replace(/[^a-zA-Z0-9]/g, &apos;&apos;).substring(0, length);
}

console.log(&apos;=== Secure Secrets Generator ===\n&apos;);
console.log(&apos;NEXTAUTH_SECRET:&apos;, generateSecret(32));
console.log(&apos;JWT_SECRET:&apos;, generateSecret(32));
console.log(&apos;\nCopy these values to your .env file.&apos;);
console.log(&apos;Make sure to keep them secure and never commit them to version control!&apos;);
