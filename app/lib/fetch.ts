import { Car } from "./definitions";

export async function fetchCarWithId(id: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`https://freetestapi.com/api/v1/cars/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch car with id.");
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
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(
      `https://freetestapi.com/api/v1/cars?search=${query}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch car with id.");
    }
    const car = await response.json();
    return car;
  } catch (error) {
    console.error("Fetch car list error:", error);
    throw new Error("Failed to fetch car with id.");
  }
}
