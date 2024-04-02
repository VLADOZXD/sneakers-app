"use client";

import Image, { StaticImageData } from "next/image";

interface StatusProps {
  image: StaticImageData;
  title: string;
  text: string;
}

const Status = ({ image, title, text }: StatusProps) => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="space-y-5">
        <Image src={image} alt="Status image" className="w-16 h-16 m-auto" />
        <div className="space-y-2">
          <div className="text-xl font-semibold text-center">{title}</div>
          <p className="text-base font-normal text-center">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Status;
