import { Client } from 'pg';


async function connectDB() {
  const client = new Client({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DaB_DATABASE || 'auth',
    password: process.env.DB_PASSWORD || 'Shivani@2001',
    port: process.env.DB_PORT || 5432,
    max: 20, // maximum number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    connectionTimeoutMillis: 200
  });

  try {
    await client.connect();
      console.log('Auth DB Connection Estalished');
      return client;
   
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    throw error;
  }
}

export default connectDB;