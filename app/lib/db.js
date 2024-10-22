// lib/db.js
import { Pool } from "pg";

// Create a new pool instance
const pool = new Pool({
  user: process.env.PGUSER, // PostgreSQL user
  host: process.env.PGHOST, // Database host
  database: process.env.PGDATABASE, // Database name
  password: process.env.PGPASSWORD, // User password
  port: process.env.PGPORT, // Port (default is 5432)
});

// Function to query the database
export const query = (text, params) => pool.query(text, params);
