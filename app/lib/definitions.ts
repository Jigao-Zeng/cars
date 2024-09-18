export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  fuelType: "Gasoline" | "Electric" | "Diesel";
  transmission: "Automatic" | "CVT" | "Manual";
  engine: string;
  horsepower: number;
  features: string[];
  owners: number;
  image: string;
}

export type CarMains = Pick<
  Car,
  "make" | "model" | "year" | "mileage" | "price"
>;
