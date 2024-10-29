import CarDetails from "@/app/ui/cars/carDetails";
import { fetchCarById } from "@/app/lib/fetch";
export default async function CarPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const car = await fetchCarById(id);

  return <CarDetails car={car} />;
}
