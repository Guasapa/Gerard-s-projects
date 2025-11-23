import { Pool } from 'pg';

// PostgreSQL connection pool
const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  database: process.env.POSTGRES_DB || 'fullstack_starter',
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'password',
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Test the connection
export const connectPostgreSQL = async () => {
  try {
    const client = await pool.connect();
    console.log('✅ PostgreSQL connected successfully');
    client.release();
    
    pool.on('error', (err: Error) => {
      console.error('❌ Unexpected PostgreSQL error:', err);
    });
  } catch (error) {
    console.error('❌ Failed to connect to PostgreSQL:', error);
    // In production, you might want to exit the process
    // process.exit(1);
  }
};

// Query helper function
export const query = async (text: string, params?: unknown[]) => {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('Query error:', error);
    throw error;
  }
};

export default pool;
