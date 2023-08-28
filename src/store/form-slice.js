import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  // create slice and set the base property such as name, initialState nad the reducers functions
  name: "form",
  initialState: {
    userName: "",
    password: "",
  },
  reducers: {
    updateUsername(state, action) {
      state.userName = action.payload; // add a payload property as userName value
    },
    updatePassword(state, action) {
      state.password = action.payload; // add a payload property as password value
    },
    clearInputField(state) {
      // clear the input fields
      state.userName = "";
      state.password = "";
    },
  },
});

export const formActions = formSlice.actions; // export the slice actions
export default formSlice;