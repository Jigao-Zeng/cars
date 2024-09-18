import { Car } from "./definitions";

export async function fetchCarsList() {
  try {
    const response = await fetch("https://freetestapi.com/api/v1/cars");
    if (!response.ok) {
      throw new Error("Failed to fetch car list.");
    }
    const carsList: Car[] = await response.json();
    return carsList;
  } catch (error) {
    console.error("Fetch car list error:", error);
    throw new Error("Failed to fetch car list.");
  }
}

export async function fetchCarWithId(id: string) {
  try {
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

export async function fetchSearchedCars(query: string, limit: number) {
  try {
    const response = await fetch(
      `https://freetestapi.com/api/v1/cars?search=${query}&limit=${limit}`
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
