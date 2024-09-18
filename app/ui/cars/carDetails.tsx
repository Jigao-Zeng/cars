"use-client";

import { Car } from "@/app/lib/definitions";

export default function CarDetails({ car }: { car: Car }) {
  const { year, make, model, engine } = car;

  const description = `${year} ${make} ${model} ${engine}`;

  return (
    <div>
      <h1 className="text-2xl">{description}</h1>
      {Object.entries(car).map(([k, v]) => `${k}: ${v}, `)}
    </div>
  );
}
