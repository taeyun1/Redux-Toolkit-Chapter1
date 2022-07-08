import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  // ↓ counterSlice.actions  함수로 실행됨
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    deincrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export { counterSlice };
export const { increment, deincrement, reset, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer; // counterReducer
