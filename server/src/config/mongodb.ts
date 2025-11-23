/**
 * MongoDB Configuration
 * 
 * To use MongoDB:
 * 1. Install mongoose: npm install mongoose
 * 2. Set MONGODB_URI in your .env file
 * 3. Uncomment and use the connection function below
 */

/*
import mongoose from 'mongoose';

export const connectMongoDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/your-database';
    
    await mongoose.connect(mongoURI);
    
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

// Connection event handlers
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
*/

// Example usage in index.ts:
// import { connectMongoDB } from './config/mongodb';
// connectMongoDB();
