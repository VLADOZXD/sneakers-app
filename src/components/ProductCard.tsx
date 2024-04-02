"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/lib/store";
import { addItem, removeItem } from "@/lib/features/cartSlice";
import { addFavorite, removeFavorite } from "@/lib/features/favoritesSlice";

import PlusIcon from "./Icons/PlusIcon";
import HeartIcon from "./Icons/HeartIcon";
import CheckIcon from "./Icons/CheckIcon";

import { Product } from "@/types/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isPurchase, setPurchase] = useState(false);
  const [isFavorite, setFavorite] = useState(false);

  const cartItems = useAppSelector((state) => state.cartReducer.cartItems);
  const favoriteItems = useAppSelector(
    (state) => state.favoritesReducer.favoriteItems
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setPurchase(cartItems.some((item) => item.id === product.id));
    setFavorite(favoriteItems.some((item) => item.id === product.id));
  }, [cartItems, favoriteItems]);

  const onClickCartAdd = () => {
    dispatch(addItem(product));
  };

  const onClickCartRemove = () => {
    dispatch(removeItem(product));
  };

  const onClickFavorite = () => {
    if (!isFavorite) {
      dispatch(addFavorite(product));
    } else {
      dispatch(removeFavorite(product));
    }
  };

  let favoriteButtonStyle =
    "group absolute top-0 left-0 rounded-lg border border-gray-100 w-8 h-8 flex justify-center items-center hover:border-none hover:bg-gray-100 ease-in-out duration-300";
  let favoriteIconStyle =
    "w-5 h-5 stroke-gray-300 group-hover:stroke-gray-400 ease-in-out duration-300";

  if (isFavorite) {
    favoriteButtonStyle =
      "group absolute top-0 left-0 bg-red-200 rounded-lg w-8 h-8 flex justify-center items-center";
    favoriteIconStyle = "w-5 h-5 stroke-none fill-red-400";
  }

  return (
    <div className="rounded-[40px] border border-gray-100 p-8 w-fit md:hover:shadow-[0px_14px_30px_0px_#0000000D] md:hover:-translate-y-2 md:ease-in-out md:duration-300">
      <div className="w-fit space-y-3">
        <div className="relative">
          <Image
            src={product.imgUrl}
            priority
            width={128}
            height={112}
            sizes="100%"
            alt={product.name}
            className="w-32 h-28 mx-auto"
          />
          <button onClick={onClickFavorite} className={favoriteButtonStyle}>
            <HeartIcon className={favoriteIconStyle} />
          </button>
        </div>
        <span className="text-sm font-normal leading-4 line-clamp-2">
          {product.name}
        </span>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-400">PRICE:</span>
            <span className="text-sm font-bold">{product.price + "$"}</span>
          </div>
          {isPurchase ? (
            <button
              onClick={onClickCartRemove}
              className="rounded-lg bg-gradient-to-t from-[#3CC755] to-[#89F09C] w-8 h-8 flex justify-center items-center"
            >
              <CheckIcon className="w-5 h-5 fill-white" />
            </button>
          ) : (
            <button
              onClick={onClickCartAdd}
              className="group rounded-lg border border-gray-100 w-8 h-8 flex justify-center items-center hover:bg-gray-100 ease-in-out duration-200"
            >
              <PlusIcon className="w-5 h-5 fill-gray-300 group-hover:fill-gray-600" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
