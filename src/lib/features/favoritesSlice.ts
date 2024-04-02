import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Product } from "@/types/Product";

interface FavoritesState {
  favoriteItems: Product[];
}

const items =
  typeof localStorage !== "undefined" &&
  localStorage.getItem("favoriteItems") !== null
    ? JSON.parse(localStorage.getItem("favoriteItems")!)
    : [];

const initialState = {
  favoriteItems: items,
} satisfies FavoritesState as FavoritesState;

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<Product>) {
      state.favoriteItems = [...state.favoriteItems, action.payload];
      localStorage.setItem(
        "favoriteItems",
        JSON.stringify(state.favoriteItems)
      );
    },
    removeFavorite(state, action: PayloadAction<Product>) {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem(
        "favoriteItems",
        JSON.stringify(state.favoriteItems)
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
