import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./form-slice";

const store = configureStore({
  reducer: { form: formSlice.reducer }, //Set the reducer with redux slice
});

export default store;
