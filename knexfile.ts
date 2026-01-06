import type Knex from &apos;knex&apos;;
import path from &apos;path&apos;;
import dotenv from &apos;dotenv&apos;;

// Load environment variables
dotenv.config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: &apos;sqlite3&apos;,
    connection: {
      filename: path.join(__dirname, &apos;./dev.sqlite3&apos;)
    },
    useNullAsDefault: true,
    migrations: {
      directory: &apos;./migrations&apos;,
      tableName: &apos;knex_migrations&apos;
    },
    seeds: {
      directory: &apos;./seeds&apos;
    }
  },
  
  production: {
    client: &apos;sqlite3&apos;,
    connection: {
      filename: process.env.DATABASE_URL || path.join(__dirname, &apos;./prod.sqlite3&apos;)
    },
    useNullAsDefault: true,
    migrations: {
      directory: &apos;./migrations&apos;,
      tableName: &apos;knex_migrations&apos;
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};

export default config;