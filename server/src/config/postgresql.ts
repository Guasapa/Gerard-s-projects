/**
 * PostgreSQL Configuration
 * 
 * To use PostgreSQL:
 * 1. Install pg: npm install pg
 * 2. Install types: npm install -D @types/pg
 * 3. Set DATABASE_URL in your .env file
 * 4. Uncomment and use the pool configuration below
 */

/*
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/database',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.on('connect', () => {
  console.log('✅ PostgreSQL connected');
});

pool.on('error', (err) => {
  console.error('❌ PostgreSQL pool error:', err);
  process.exit(-1);
});

export default pool;
*/

// Example usage in a controller:
// import pool from '../config/postgresql';
// const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
