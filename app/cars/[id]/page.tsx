import CarDetails from "@/app/ui/cars/carDetails";
import { fetchCarWithId } from "@/app/lib/fetch";
export default async function CarPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const car = await fetchCarWithId(id);

  return <CarDetails car={car} />;
}
