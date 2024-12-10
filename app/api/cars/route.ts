import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "cars_db",
  port: 5432,
});

// POST method handler
export async function POST(req: NextRequest) {
  const { make, model, year, fuel_type, transmission, owners } = await req.json();

  // Validate the incoming data (excluding mileage and price)
  if (!make || !model || !year || !fuel_type || !transmission || !owners) {
    return NextResponse.json({ error: "All fields except id are required" }, { status: 400 });
  }

  try {
    // Connect to the database
    const client = await pool.connect();

    // Get the highest id currently in the database
    const result = await client.query("SELECT MAX(id) AS max_id FROM cars");
    const maxId = result.rows[0].max_id || 0; // Default to 0 if no records exist
    const newId = maxId + 1;

    // Insert the new record
    await client.query(
      "INSERT INTO cars (id, make, model, year, fuel_type, transmission, owners) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [newId, make, model, year, fuel_type, transmission, owners]
    );

    client.release();

    return NextResponse.json({ message: "Car added successfully", id: newId }, { status: 201 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Failed to add car to the database" }, { status: 500 });
  }
}


