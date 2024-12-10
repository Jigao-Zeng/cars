import { fetchAllCars } from "./lib/fetch";
import { Car } from "./lib/definitions";
import { capitalize, getDesc } from "./lib/utils";
import Link from "next/link";
import Search from "./ui/search";

export default async function Home() {
  const allCars = await fetchAllCars();
  console.log({ allCars });

  return (
    <div className="w-full">
      {/* Search Bar */}
      <div className="mt-6 mb-4 flex justify-center">
        <div className="w-full max-w-md relative">
          <Search placeholder="Search cars by model such as Corolla... " />
        </div>

        <div>
          <Link href={'/register'}>Register your car</Link>
        </div>
      </div>

      {/* Cars Listing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {allCars.map((c: Car) => {
          const { make, model, year } = c;
          const carMains = { make, model, year };
          const desc = getDesc(c);
          return (
            <div className="bg-gray-100 shadow-md p-4 rounded-md" key={c.id}>
              {/* <Image src={c?.image} width={400} height={200} alt={desc} /> */}
              <h2 className="text-lg font-bold mt-2">{desc}</h2>


              <div className="mt-2">
                {Object.entries(carMains).map(([k, v]) => (
                  <p key={k} className="text-gray-600">
                    <span className="font-semibold">{capitalize(k)}: </span>
                    {v}
                  </p>
                ))}
                {/* <p className="text-gray-600">
                  <span className="font-semibold">
                    {capitalize("mileage")}:{" "}
                  </span>
                  {mileage?.toLocaleString()} km
                </p> */}
              </div>

              <Link href={`/cars/${c.id}`}>
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md">
                  View Details
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
