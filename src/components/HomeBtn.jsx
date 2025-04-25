"use client";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";

const NavLink = motion(Link);
const HomeBtn = () => {
  return (
    <NavLink
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      href={"/"}
      target={"_self"}
      className="text-foreground  rounded-full flex items-center justify-center
        custom-bg fixed top-4 left-4 w-fit self-start z-50
        "
      aria-label={"home"}
      name={"home"}
      prefetch={false}
    >
      <span className="relative w-10 sm:w-14 h-10 sm:h-14 p-3 sm:p-4  hover:text-accent">
        <Home className="w-full h-auto" strokeWidth={1.5} />

        

        <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap z-50">
          Home
        </span>
      </span>
      <span className="sr-only">Go to Home Page</span>
    </NavLink>
  );
};

export default HomeBtn;
