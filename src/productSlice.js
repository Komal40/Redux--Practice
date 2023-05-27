import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  initialState: {
    products: []
  },
  name: "products",
  reducers: {
    getAllProduct: (state, action) => {
      state.products = action.payload;
    },
    deleteIteam: (state, action) => {
      const _productsState = state.products;
      const filteredProducts = _productsState.filter(
        (product) => product.id !== action.payload
      );
      state.products = filteredProducts;
    }
  }
});

export const { getAllProduct, deleteIteam } = productSlice.actions;
export const productReducer = productSlice.reducer;
