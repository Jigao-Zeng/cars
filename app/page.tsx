import { fetchCarsList, fetchSearchedCars } from "./lib/fetch";
import { Car } from "./lib/definitions";
import { capitalize, getDesc } from "./lib/utils";
import { lusitana } from "./ui/fonts";
import Image from "next/image";
import Link from "next/link";
import Search from "./ui/search";
import Pagination from "./ui/cars/pagination";

export default async function Home({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const query = searchParams?.query || "";
  const CARS_PER_PAGE = 5;
  const currentPage = Number(searchParams?.page) || 1;
  const allCars = await fetchCarsList();
  const allCarsLength = allCars.length;
  const totalPages = Math.ceil(Number(allCarsLength) / CARS_PER_PAGE);
  const cars = await fetchSearchedCars(query, CARS_PER_PAGE);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Our cars</h1>
      </div>

      <Search placeholder="Search cars..." />

      {cars.map((c: Car) => {
        const { make, model, year, mileage, price } = c;
        const carMains = { make, model, year, mileage, price };
        const desc = getDesc(c);
        return (
          <div className="bg-gray-200 px-2 py-2 mt-10 w-150" key={c.id}>
            <Image src={c.image} width={510} height={200} alt={desc} />
            <h2 className="text-xl">{desc}</h2>

            <div>
              {Object.entries(carMains).map(([k, v]) => (
                <span key={k}>
                  <span className={`${lusitana.className}`}>
                    {capitalize(k)}
                  </span>
                  : <span className={`${lusitana.className}`}>{v}</span>
                  {", "}
                </span>
              ))}
            </div>
            <Link href={`/cars/${c.id}`}>
              <p className="hidden md:block mt-2">View details</p>
            </Link>
          </div>
        );
      })}

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
