import knex from 'knex';
import config from './knexfile';

async function testConnection() {
  const db = knex(config.development);
  
  try {
    // Test the connection
    await db.raw('SELECT 1');
    console.log('✅ Database connection successful!');
    
    // Create a test table
    await db.schema.createTableIfNotExists('test_table', (table) => {
      table.increments(&apos;id&apos;);
      table.string(&apos;name&apos;);
    });
    
    console.log(&apos;✅ Test table created successfully!&apos;);
  } catch (error) {
    console.error(&apos;❌ Database error:&apos;, error);
  } finally {
    await db.destroy();
  }
}

testConnection();
