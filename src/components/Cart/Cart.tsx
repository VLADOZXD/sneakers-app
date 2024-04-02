"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/lib/store";
import { clearCart } from "@/lib/features/cartSlice";

import CartBox from "@/components/Cart/CartBox";
import Status from "@/components/Layouts/Status";
import CartList from "@/components/Cart/CartList";
import Button from "../Layouts/Button";

import EmptyBox from "@/assets/empty-box.png";

const Cart = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const cartItems = useAppSelector((state) => state.cartReducer.cartItems);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setCartTotal(cartItems.reduce((total, item) => total + item.price, 0));
  }, [cartItems]);

  const onOrderClick = () => {
    dispatch(clearCart());
  };

  return (
    <CartBox>
      {cartItems.length !== 0 ? (
        <div className="h-full flex flex-col justify-between">
          <CartList cart={cartItems} />
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-normal text-base">Total:</span>
              <span className="text-sm font-semibold">{`${cartTotal?.toFixed(
                2
              )}$`}</span>
            </div>
            <Button text="Make an order" onButtonClick={onOrderClick} />
          </div>
        </div>
      ) : (
        <Status
          image={EmptyBox}
          title="NO ITEMS IN CART"
          text="Add at least one pair of sneakers to complete your order."
        />
      )}
    </CartBox>
  );
};

export default Cart;
