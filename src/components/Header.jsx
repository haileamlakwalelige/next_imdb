import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-5 px-2 sm:px-4 md:px-12 lg:px-20 xl:px-28 2xl:px-44">
        <div className="flex items-center justify-center gap-4">
          <Link href={"/signup"}>Signup</Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <div className="bg-yellow-500 w-fit py-3 px-10 text-black font-bold rounded">
            IMDB
          </div>
          <p className="font-bold">Clone</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
