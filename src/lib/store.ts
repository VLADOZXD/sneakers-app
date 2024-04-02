import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import favoritesReducer from "./features/favoritesSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: { cartReducer, favoritesReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
