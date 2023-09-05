import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constant";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="flexBetween navbar">
        <div className="flex justify-center items-center mx-10">
            
          <Link href="/">
            <img src="/umbrella.svg" className={`w-full h-20 md:w-50 px-5 logo`}  width={100} height={43} alt="logo" />
          </Link>
          <ul className="flex text-xl gap-7">
            {NavLinks.map((link) => (
              <Link href={link.href} key={link.text}>
                {link.text}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
