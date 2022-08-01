import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./pizza-slice";

const store = configureStore({
  reducer: pizzaSlice.reducer,
});

export default store;
