import { createSlice } from "@reduxjs/toolkit";

const state = {
  userId: null,
  nickname: null,
  stateChange: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: {
    setUser: (state, action) => {
      console.log("action", action);
      state.userId = action.payload.uid;
      state.stateChange = true;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
