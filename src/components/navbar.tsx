/** @format */

"use client";

import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, QrCode, Menu } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";


type Props = {};

export default function Navbar({}: Props) {


  return (
    <header className="fixed left-0 w-full py-3 border-b flex justify-between gap-2  top-0 bg-blend-saturation bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-20  h-[64px] ">
      {/* logo */}
      <button
        // onClick={toggleMenu}
        className=" rounded-full 
      min-h-12 min-w-12 transition-all   hover:bg-secondary
p-0 flex items-center justify-center  md:hidden      "
      >
        {/* <Menu size={22} /> */}

        <SidebarTrigger className="-ml-1" />
      </button>

      <Link href={"/"} className="flex items-center gap-1 text-2xl min-w-28 ">
        <img className="h-8 w-auto" src={"/redditLogo.svg"} alt="" />

        <p className="font-bold text-[#FF4500] "> reddit </p>
      </Link>

      {/* seachbar */}
      <div className="w-full max-w-[600px] flex items-center relative ">
        <Search size={20} className=" absolute left-3  text-muted-foreground" />
        <Input
          className=" w-full pl-10 focus-visible:ring-orange-600 rounded-full "
          placeholder="Search Reddit"
        />
      </div>

      {/* buttons */}

      <div
        className="flex items-center gap-2
      "
      >
        {/* <ModeToggle /> */}
        <Button
          variant="secondary"
          className=" gap-2  hidden md:flex transition-all rounded-full "
        >
          <QrCode size={20} className="" />
          Get app
        </Button>
        <Button className="bg-[#D93A14] hover:bg-[#D93A14]/80  rounded-full">Log In</Button>

      
      </div>
    </header>
  );
}
