import { configureStore} from "@reduxjs/toolkit";
 import { productsApi } from "./features/apiSlice";
 
export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
});
