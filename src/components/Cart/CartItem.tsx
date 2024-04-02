"use client";

import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { removeItem } from "@/lib/features/cartSlice";

import { Product } from "@/types/Product";

import Cancelcon from "../Icons/CanceIcon";

interface ProductCardProps {
  product: Product;
}

const CartItem = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const onClickCartRemove = () => {
    dispatch(removeItem(product));
  };

  return (
    <li className="rounded-2xl border border-gray-100 p-4 w-full">
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center space-x-5">
          <Image
            src={product.imgUrl}
            priority
            width={70}
            height={70}
            sizes="100%"
            alt={product.name}
            className="w-16 h-16"
          />
          <div className="flex flex-col space-y-2">
            <span className="text-sm w-fit font-normal leading-4 line-clamp-2">
              {product.name}
            </span>
            <span className="text-sm font-bold">{product.price + "$"}</span>
          </div>
        </div>
        <button
          onClick={onClickCartRemove}
          className="rounded-lg border border-gray-100 p-1 flex justify-center items-center hover:bg-gray-100 ease-in-out duration-200"
        >
          <Cancelcon className="w-5 h-5 fill-gray-300 group-hover:fill-gray-600" />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
