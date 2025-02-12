import Link from "next/link";
import React from "react";
import DarkMode from "./DarkMode";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between text-gray-700 dark:text-white py-5 px-2 sm:px-4 md:px-12 lg:px-20 xl:px-28 2xl:px-44">
        <div className="flex gap-1 items-center justify-center">
          {/* New Logo Design */}
          <Link href={"/"}>
            <div className="relative flex items-center justify-center  bg-gradient-to-r rounded-xl from-indigo-600 via-purple-600 to-pink-500">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-2 px-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
                Movie<span className="text-yellow-400">X</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-evenly gap-4 lg:gap-10 xl:gap-16">
          <div className="flex gap-2 md:gap-4 lg:gap-8 font-medium">
            <Link
              href={"/"}
              className="hover:text-blue-700 hover:font-semibold duration-300 transition-transform"
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="hover:text-blue-700 hover:font-semibold duration-300 transition-transform"
            >
              About
            </Link>
            <div>
              <SignedIn>
                <UserButton></UserButton>
              </SignedIn>
              <SignedOut>
               
              </SignedOut>
            </div>
          </div>
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
