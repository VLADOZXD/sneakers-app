"use client";

import { useRouter } from "next/navigation";

interface ModalProps {
  children?: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const router = useRouter();

  const onBackdrop = () => {
    router.back();
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 z-5"
      onClick={onBackdrop}
    >
      {children}
    </div>
  );
};

export default Modal;
