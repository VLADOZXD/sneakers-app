"use client";

import { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/store";
import Link from "next/link";

import CartIcon from "../Icons/CartIcon";
import FavoriteIcon from "../Icons/FavoriteIcon";

const Navbar = () => {
  const [cartTotal, setCartTotal] = useState(0);

  const cartItems = useAppSelector((state) => state.cartReducer.cartItems);

  useEffect(() => {
    setCartTotal(cartItems.reduce((total, item) => total + item.price, 0));
  }, [cartItems]);

  return (
    <div className="flex flex-row md:space-x-6 sm:space-x-2">
      <Link href="/favorites" className="flex flex-row items-center space-x-2">
        <FavoriteIcon className="w-5 h-5 stroke-gray-600" />
        <span className="text-sm font-normal md:block sm:hidden">
          Favorites
        </span>
      </Link>
      <Link
        href="/cart"
        scroll={false}
        className="flex flex-row items-center space-x-2"
      >
        <CartIcon className="w-5 h-5 stroke-gray-600" />
        <span className="text-sm font-semibold">{`${cartTotal?.toFixed(
          2
        )}$`}</span>
      </Link>
    </div>
  );
};

export default Navbar;
