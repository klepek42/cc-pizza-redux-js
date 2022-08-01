import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizza: [{ name: "TEST", price: 42 }],
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    loadPizza(state, action) {
      return {
        pizza: action.payload.pizza ? action.payload.pizza : [],
      };
    },
  },
});

export const pizzaActions = pizzaSlice.actions;

export default pizzaSlice;
