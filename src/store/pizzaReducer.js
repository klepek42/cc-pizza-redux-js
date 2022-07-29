import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: "Pizza Margherita", price: 4 },
  { name: "Pizza Salami", price: 5 },
  { name: "Pizza Tonno", price: 6 },
];

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
});

export default pizzaSlice.reducer;
