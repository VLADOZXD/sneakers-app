import CartItem from "@/components/Cart/CartItem";

import { Product } from "@/types/Product";

interface CartListProps {
  cart: Product[];
}

const CartList = ({ cart }: CartListProps) => {
  return (
    <div className="overflow-auto no-scrollbar my-14">
      <ul className="space-y-4">
        {cart.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
      </ul>
    </div>
  );
};

export default CartList;
