import { Car } from "./definitions";

export function getDesc(car: Car) {
  const { year, make, model, engine } = car;
  const description = `${year} ${make} ${model} ${engine}`;
  return description;
}

export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
