"use client";

import { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/store";

import PagesContent from "@/components/PagesContent/PagesContent";
import Status from "@/components/Layouts/Status";

import EmptyFavorites from "@/assets/empty-favorites.png";

const FavoritesPage = () => {
  const favoriteItems = useAppSelector(
    (state) => state.favoritesReducer.favoriteItems
  );

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {favoriteItems.length !== 0 && isLoading ? (
        <PagesContent pageTitle="Favorites" pageItems={favoriteItems} />
      ) : (
        <Status
          image={EmptyFavorites}
          title="NO ITEMS IN FAVORITES"
          text="Add at least one pair of sneakers to favorites."
        />
      )}
    </>
  );
};

export default FavoritesPage;
