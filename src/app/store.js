import { configureStore } from "@reduxjs/toolkit";
import barsSlice from "../components/Bars-contianer/barsSlice";

export const store = configureStore({
  reducer: {
    barsSlice: barsSlice,
  },
});
