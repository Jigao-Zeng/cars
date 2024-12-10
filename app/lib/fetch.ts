import { Car } from "./definitions";

import { Pool } from "pg";

// Create a new pool instance for connecting to your PostgreSQL database
const pool = new Pool({
  user: "postgres", // Your PostgreSQL username
  host: "localhost", // Your database host
  database: "cars_db", // Your database name
  port: 5432, // Default PostgreSQL port
});

// Function to fetch all cars from the database
export async function fetchAllCars() {
  try {
    const client = await pool.connect(); // Get a client from the pool
    const result = await client.query("SELECT * FROM cars"); // Query to fetch all cars

    const cars = result.rows; // Extract the rows from the result

    client.release(); // Release the client back to the pool

    return cars;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch cars.");
  }
}

export async function fetchCarById(id: string) {
  try {
    const numericId = Number(id); // Convert the string id to a number

    if (isNaN(numericId)) {
      throw new Error("Invalid ID format. ID must be a number.");
    }
    const client = await pool.connect(); // Get a client from the pool
    const result = await client.query("SELECT * FROM cars WHERE id = $1", [
      numericId,
    ]); // Query to fetch a car by id

    const car = result.rows[0]; // Extract the first row from the result

    client.release(); // Release the client back to the pool

    return car;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch car by id.");
  }
}
