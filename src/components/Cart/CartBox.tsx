import { useRouter } from "next/navigation";
import CanceIcon from "../Icons/CanceIcon";
import Link from "next/link";

interface CartBoxProps {
  children?: React.ReactNode;
}

const CartBox = ({ children }: CartBoxProps) => {
  const router = useRouter();

  return (
    <div className="fixed right-0 top-0 bg-white md:w-96 sm:w-full h-full p-8 z-10">
      <div className="relative ">
        <div className="absolute w-full flex flex-row justify-between items-center">
          <p className="text-2xl font-bold">Cart</p>
          <button onClick={() => router.back()}>
            <CanceIcon className="w-5 h-5 fill-gray-600" />
          </button>
        </div>
      </div>

      {children}
    </div>
  );
};

export default CartBox;
