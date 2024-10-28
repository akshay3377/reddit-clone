/** @format */

"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, QrCode } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import Profile from "./profile";

export default function Navbar() {
  return (
    <header className="fixed left-0 w-full py-3 border-b flex justify-between items-center gap-2 top-0 bg-white z-20 h-[64px] px-4">
      {/* logo */}
      <div className="flex items-center gap-3">
        {" "}
        {/* <Button
          // onClick={toggleMenu}
          className="rounded-full min-h-12 min-w-12 transition-all hover:bg-secondary p-0 flex items-center justify-center md:hidden"
        > */}
          {/* <Menu size={22} /> */}
          <SidebarTrigger className="-ml-1" />
        {/* </Button> */}
        <Link href={'/'} className="flex items-center gap-1 text-2xl min-w-28">
          <Image
            className="h-8 w-auto"
            src="/redditLogo.svg" // Update with the correct path to your image
            alt="Reddit Logo" // Add an alt text for accessibility
            width={32} // Set width based on your design
            height={32} // Set height based on your design
          />
          <p className="font-bold text-[#FF4500] hidden md:block">reddit</p>
        </Link>
      </div>

      {/* search bar */}
      <div className="w-full max-w-[600px] flex items-center relative">
        <Search size={20} className="absolute left-3 text-muted-foreground" />
        <Input
          className="w-full pl-10 focus-visible:ring-orange-600 rounded-full"
          placeholder="Search Reddit"
        />
      </div>

      {/* buttons */}
      <div className="flex items-center gap-2">
        {/* <ModeToggle /> */}
        <Button
          variant="secondary"
          className="gap-2 hidden md:flex transition-all rounded-full"
        >
          <QrCode size={20} className="" />
          Get app
        </Button>
        <Button className="bg-[#D93A14] hover:bg-[#D93A14]/80 rounded-full">
          Log In
        </Button>

        <Profile/>
      </div>
    </header>
  );
}
