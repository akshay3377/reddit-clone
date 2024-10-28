"use client";

import LocationSlider from "@/components/home-slider";
import { Button } from "@/components/ui/button";
import { Ellipsis, Flag, Heart, MessageSquare, Upload } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  // DropdownMenuGroup,
  DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <div className="flex flex-col gap-3">
      <section className="w-full flex items-center justify-center">
        <LocationSlider />
      </section>

      <section className="flex gap-6">
        {/* left main (2/3 width) */}
        <main className="flex flex-col gap-3 w-full lg:w-2/3">
          <PostCard />
          <PostCard />
          <PostCard />
        </main>

        {/* right sidebar (1/3 width) */}
        <aside className="w-1/3 h-fit sticky top-[80px] p-4 bg-[#F6F8F9] shadow-sm z-10 flex-col gap-2 rounded-xl py-3 px-2 hidden lg:flex">
          {/* right sidebar */}
          <p className="px-3 font-semibold text-xs">POPULAR COMMUNITIES</p>
          <CommunitiesList />
        </aside>
      </section>
    </div>
  );
}

function CommunitiesList() {
  const [showAll, setShowAll] = useState(false);

  // Sample data for communities, can be replaced with actual data
  const communities = Array.from(
    { length: 10 },
    (_, i) => `Community ${i + 1}`
  );

  // Limit to show only the first 5 items if showAll is false
  const visibleCommunities = showAll ? communities : communities.slice(0, 5);

  return (
    <section
      className={`flex flex-col gap-3 ${
        showAll ? "h-screen overflow-y-auto" : ""
      }`}
    >
      {visibleCommunities.map((community, index) => (
        <CommunitiesCard key={index} name={community} />
      ))}
      <button
        onClick={() => setShowAll(!showAll)}
        className="text-blue-500 font-semibold mt-2 self-start px-3 text-xs hover:underline"
      >
        {showAll ? "See Less" : "See More"}
      </button>
    </section>
  );
}

type CommunitiesCardProps = {
  name: string;
};

function CommunitiesCard({ name }: CommunitiesCardProps) {
  return (
    <div className="flex gap-3 rounded-full px-3 py-1.5 cursor-pointer">
      {/* left */}
      <Image
        className="h-10 w-10 rounded-full"
        src={"/demo.avif"}
        alt="community-img"
        width={40}
        height={40}
      />
      <div className="flex flex-col gap-1">
        {/* community name */}
        <p className="text-sm text-gray-600">{name}</p>
        <p className="text-xs text-gray-400">4,345,555 members</p>
      </div>
    </div>
  );
}

function PostCard() {
  return (
    <div className="w-full rounded-xl bg-background flex flex-col gap-3 pb-4 mb-1 overflow-auto border h-auto">
      {/* line 1 */}
      <section className="flex w-full justify-between gap-2 px-2 py-1 ">
        {/* left */}
        <div className="flex items-center gap-1">
          <Image
            className="h-8 w-8 rounded-full "
            src={"/story.jpg"}
            alt="user-img"
            width={36}
            height={36}
          />

          <p className="text-sm text-gray-600">r/utkarshseth</p>

          <p className="text-gray-400 text-xs">7 hr. ago</p>
        </div>

        {/* right side */}
        <div className="flex gap-1 items-center">
          <Button
            size="sm"
            className="bg-blue-500 text-white font-bold rounded-3xl text-xs"
          >
            Join
          </Button>
          {/* <Button variant="secondary" className="w-10 h-10 p-2 rounded-3xl">
           
          </Button> */}
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer" asChild>
              <Button variant="ghost" className="rounded-full">
                <Ellipsis className="" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-24 mr-24 ">
              <DropdownMenuItem
                onClick={() => {
                  alert("alert"); // Sign out and redirect to homepage
                }}
              >
                <Flag className="mr-2 h-4 w-4" />
                <span className="">Report</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
      <p className="font-medium px-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="w-full h-[550px] bg-black  relative overflow-hidden">
        <Image
          className="object-contain"
          src={"/story.jpg"}
          alt="post image"
          layout="fill"
        />
      </div>

      <div className="flex items-center gap-3 px-2 pt-3">
        <Button
          variant="secondary"
          className="flex items-center gap-1 rounded-full"
        >
          <Heart />
          114
        </Button>
        <Button
          variant="secondary"
          className="flex items-center gap-1 rounded-full"
        >
          <MessageSquare />
          114
        </Button>
        <Button
          variant="secondary"
          className="flex items-center gap-1 rounded-full"
        >
          <Upload />
          Share
        </Button>
      </div>
    </div>
  );
}
