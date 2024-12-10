"use client";

import { FormEvent, useState } from "react";

export default function Page() {
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(event.currentTarget);

    // Convert FormData to JSON-like object
    const data: Record<string, string | number | File> = {};
    formData.forEach((value, key) => {
        // Convert owners and year to numbers, other fields are kept as strings
        if (key === "owners" || key === "year") {
          data[key] = Number(value);  // Convert to number
        } else {
          data[key] = value; // Keep as string
        }
      });

    try {
      // Send data to the API
      const response = await fetch("/api/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      setResponseMessage("Car submitted successfully!");
    } catch (error) {
      console.error("Submission failed:", error);
      setResponseMessage("Submission failed. Please try again.");
    }
  }

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg space-y-4"
      >
      
        <label className="block">
          <span className="text-gray-700">Make:</span>
          <input
            type="text"
            name="make"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Model:</span>
          <input
            type="text"
            name="model"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Year:</span>
          <input
            type="number"
            name="year"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Fuel Type:</span>
          <input
            type="text"
            name="fuel_type"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Transmission:</span>
          <input
            type="text"
            name="transmission"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Owners:</span>
          <input
            type="number"
            name="owners"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
      {responseMessage && <p className="text-center text-green-500 mt-4">{responseMessage}</p>}
    </>
  );
}
