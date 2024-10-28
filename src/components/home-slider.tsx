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
  description: string;
  user: {
    name: string;
    profilePic: string;
  };
}

const dummyTrips: Trip[] = [
  { 
    _id: "1", 
    name: "Beach Paradise", 
    distance: "5 km", 
    image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg", 
    description: "A beautiful beach location.", 
    user: {
      name: "John Doe",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg"
    }
  },
  { 
    _id: "1", 
    name: "Beach Paradise", 
    distance: "5 km", 
    image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg", 
    description: "A beautiful beach location.", 
    user: {
      name: "John Doe",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg"
    }
  },
  { 
    _id: "1", 
    name: "Beach Paradise", 
    distance: "5 km", 
    image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg", 
    description: "A beautiful beach location.", 
    user: {
      name: "John Doe",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg"
    }
  },
  { 
    _id: "1", 
    name: "Beach Paradise", 
    distance: "5 km", 
    image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg", 
    description: "A beautiful beach location.", 
    user: {
      name: "John Doe",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg"
    }
  },
  { 
    _id: "1", 
    name: "Beach Paradise", 
    distance: "5 km", 
    image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg", 
    description: "A beautiful beach location.", 
    user: {
      name: "John Doe",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg"
    }
  },
  { 
    _id: "1", 
    name: "Beach Paradise", 
    distance: "5 km", 
    image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg", 
    description: "A beautiful beach location.", 
    user: {
      name: "John Doe",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg"
    }
  },
  // Add more dummy trip items as needed
];

export default function LocationSlider() {
  const router = useRouter();
  const [trip, setTrip] = useState<Trip[]>(dummyTrips);
  const [currentValue, setCurrentValue] = useState("");
  // const [loading, setLoading] = useState(false);



  const handleFilterChange = (filterValue: string) => {
    setCurrentValue(filterValue);
    const filteredTrips = dummyTrips.filter((trip) =>
      trip.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    setTrip(filteredTrips);
  };

  useEffect(() => {
    handleFilterChange(currentValue);
  }, [currentValue]);

  return (
    <section className="container pb-4">
      <div className="mx-auto w-full">
        {false ? (
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
                  className="basis-1/1 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/4"
                >
                  <div
                    onClick={() => router.push(`/location/${item._id}`)}
                    className="relative max-w-sm rounded-lg cursor-pointer overflow-hidden group bg-white shadow-md"
                  >
                    {/* Image with Overlay */}
                    <Image
                      className="object-cover h-48 w-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={150}
                    />
                    <div className="absolute left-0 bottom-0 pl-3  transition-opacity duration-300 flex flex-col justify-end text-white">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-sm">{item.description}</p>
                      <div className="flex items-center gap-2 py-3 rounded-b-lg">
                        <Image
                          src={item.user.profilePic}
                          alt={item.user.name}
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <div>
                          <p className="text-xs font-medium text-white">{item.user.name}</p>
                        </div>
                      </div>
                    </div>
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

// SkeletonCard component remains unchanged
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
