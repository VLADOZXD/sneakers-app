import Image from "next/image";

import Navbar from "./Navbar";

import Logo from "@/assets/logo.svg";
import { Suspense } from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="md:p-11 sm:p-6 border-b">
      <div className="flex flex-row justify-between items-center">
        <Link href="/" className="flex items-center md:space-x-4 sm:space-x-2">
          <Image src={Logo} alt="logo" className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="md:text-xl sm:text-sm md:w-fit sm:w-20 font-bold">
              NEXT SNEAKERS
            </span>
            <span className="text-sm font-normal md:block sm:hidden">
              Best sneaker store
            </span>
          </div>
        </Link>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
