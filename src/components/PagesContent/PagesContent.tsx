"use client";

import { useEffect, useState } from "react";

import ProductCard from "../ProductCard";

import { Product } from "@/types/Product";

interface PagesContentProps {
  pageTitle: string;
  pageItems: Product[];
}

const PagesContent = ({ pageTitle, pageItems }: PagesContentProps) => {
  return (
    <>
      <span className="text-3xl font-bold">{pageTitle}</span>
      <div className="grid xl:gap-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-5 mt-10">
        {pageItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default PagesContent;
