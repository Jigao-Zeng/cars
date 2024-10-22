import { Car } from "./definitions";

import { Pool } from "pg";

export async function fetchCarWithId(id: string) {
  try {
    const response = await fetch(`https://freetestapi.com/api/v1/cars/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch car with id, ressponse not ok");
    }
    const car: Car = await response.json();
    return car;
  } catch (error) {
    console.error("Fetch car list error:", error);
    throw new Error("Failed to fetch car with id.");
  }
}

export async function fetchSearchedCars(query: string) {
  try {
    const response = await fetch(
      `https://freetestapi.com/api/v1/cars?search=${query}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch car lists, response not ok");
    }
    const cars: Car[] = await response.json();
    return cars;
  } catch (error) {
    console.error("Fetch car list error:", error);
    throw new Error("Failed to fetch car with id.");
  }
}

// Create a new pool instance for connecting to your PostgreSQL database
const pool = new Pool({
  user: "postgres", // Your PostgreSQL username
  host: "localhost", // Your database host
  database: "cars", // Your database name
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
