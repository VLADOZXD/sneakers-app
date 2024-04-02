"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/lib/store";
import { clearCart } from "@/lib/features/cartSlice";

import PagesContent from "@/components/PagesContent/PagesContent";
import Status from "@/components/Layouts/Status";
import Button from "@/components/Layouts/Button";

import EmptyBox from "@/assets/empty-box.png";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.cartItems);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setLoading(true);
  }, []);

  const onOrderClick = () => {
    dispatch(clearCart());
  };

  return (
    <>
      {cartItems.length !== 0 && isLoading ? (
        <>
          <PagesContent pageTitle="Cart" pageItems={cartItems} />
          <div className="text-center mt-9">
            <Button text="Make an order" onButtonClick={onOrderClick} />
          </div>
        </>
      ) : (
        <Status
          image={EmptyBox}
          title="NO ITEMS IN CART"
          text="Add at least one pair of sneakers to complete your order."
        />
      )}
    </>
  );
};

export default CartPage;
