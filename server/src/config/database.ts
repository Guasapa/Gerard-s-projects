/**
 * Database Configuration
 * 
 * This file serves as a central point for database configuration.
 * Uncomment the database you want to use and configure it in the respective file.
 */

// MongoDB
// import { connectMongoDB } from './mongodb';

// PostgreSQL
// import pool from './postgresql';

export const initDatabase = async () => {
  // Choose your database:
  
  // For MongoDB:
  // await connectMongoDB();
  
  // For PostgreSQL:
  // pool is ready to use after import
  // You can test the connection here if needed
  
  console.log('⚙️  Database configuration ready (select MongoDB or PostgreSQL in config/database.ts)');
};
