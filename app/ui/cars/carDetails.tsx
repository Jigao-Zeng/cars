"use client";

import { Car } from "@/app/lib/definitions";
import { getDesc } from "@/app/lib/utils";
import Image from "next/image";

export default function CarDetails({ car }: { car: Car }) {
  const description = getDesc(car);
  const {
    image,
    make,
    model,
    year,
    color,
    mileage,
    price,
    fuelType,
    transmission,
    engine,
    horsepower,
    features,
    owners,
  } = car;

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      {/* Car Image */}
      <div className="mb-6">
        <Image
          src={image}
          width={800}
          height={450}
          alt={description}
          className="rounded-md object-cover"
        />
      </div>

      {/* Car Title and Price */}
      <div className="flex justify-between items-center mb-6 w-[800px]">
        <h1 className="text-3xl font-bold">{`${year} ${make} ${model}`}</h1>
        <span className="text-2xl font-semibold text-green-600">{`$${price.toLocaleString()}`}</span>
      </div>

      {/* Car Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="text-lg">
          <p>
            <span className="font-semibold">Make:</span> {make}
          </p>
          <p>
            <span className="font-semibold">Model:</span> {model}
          </p>
          <p>
            <span className="font-semibold">Year:</span> {year}
          </p>
          <p>
            <span className="font-semibold">Color:</span> {color}
          </p>
          <p>
            <span className="font-semibold">Mileage:</span>{" "}
            {mileage.toLocaleString()} km
          </p>
          <p>
            <span className="font-semibold">Owners:</span> {owners}
          </p>
        </div>
        <div className="text-lg">
          <p>
            <span className="font-semibold">Fuel Type:</span> {fuelType}
          </p>
          <p>
            <span className="font-semibold">Transmission:</span> {transmission}
          </p>
          <p>
            <span className="font-semibold">Engine:</span> {engine}
          </p>
          <p>
            <span className="font-semibold">Horsepower:</span> {horsepower} hp
          </p>
        </div>
      </div>

      {/* Car Features */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
