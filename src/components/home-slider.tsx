"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

interface Trip {
  _id: string;
  name: string;
  distance: string;
  image: string;
}

const dummyTrips: Trip[] = [
  { _id: "1", name: "Beach Paradise", distance: "5 km", image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg" },
  { _id: "2", name: "Mountain Escape", distance: "10 km", image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg" },
  { _id: "3", name: "Urban Adventure", distance: "3 km", image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg" },
  { _id: "4", name: "Forest Retreat", distance: "15 km", image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg" },
  { _id: "5", name: "Desert Safari", distance: "20 km", image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg" },
  { _id: "6", name: "Desert Safari", distance: "20 km", image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg" },
  { _id: "7", name: "Desert Safari", distance: "20 km", image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg" },

];

export default function LocationSlider() {
  const router = useRouter();
  const [trip, setTrip] = useState<Trip[]>(dummyTrips);
  const [currentValue, setCurrentValue] = useState("");
  const [loading, setLoading] = useState(false);

  const featureList = [
    { label: "Beaches", value: "beaches" },
    { label: "Hills", value: "hills" },
    { label: "Outdoor", value: "outdoor" },
  ];

  const handleFilterChange = (filterValue: string) => {
    setCurrentValue(filterValue);
    // Filter the dummy data based on the selected filter
    const filteredTrips = dummyTrips.filter((trip) =>
      trip.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    setTrip(filteredTrips);
  };

  useEffect(() => {
    handleFilterChange(currentValue);
  }, [currentValue]);

  return (
    <section className="container pb-12">
      <div className="mx-auto w-full">
        {loading ? (
          <div className="flex gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : trip.length > 0 ? (
          <Carousel opts={{ loop: true, align: "start" }}>
            <CarouselContent>
              {trip.map((item) => (
                <CarouselItem
                  key={item._id}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <div
                    onClick={() => router.push(`/location/${item._id}`)}
                    className="max-w-sm rounded-lg cursor-pointer overflow-hidden group"
                  >
                    <Image
                      className="object-cover rounded-sm h-48 flex-shrink-0 transition-transform duration-300 ease-in-out group-hover:scale-105"
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={150}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-20px] top-[95px] fill-black h-10 w-10" />
            <CarouselNext className="absolute right-[-20px] top-[95px] fill-black h-10 w-10" />
          </Carousel>
        ) : (
          <p className="text-center text-lg text-muted-foreground">No locations found.</p>
        )}
      </div>
    </section>
  );
}

// SkeletonCard remains unchanged
export function SkeletonCard() {
  return (
    <div className="basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
      <Skeleton className="h-48 w-full rounded-lg" />
      <div className="py-3 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}
