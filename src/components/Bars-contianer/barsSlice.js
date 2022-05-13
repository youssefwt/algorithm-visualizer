import { createSlice } from "@reduxjs/toolkit";

// let bars = [100, 90, 20, 40, 15, 50, 70, 90, 100, 10, 30, 46, 80, 30, 60];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let barNum = 30;

let bars = Array.from({ length: barNum }, () => getRandomInt(20, 400));

// let bars = [];

let outer = 0;
let inner = outer + 1;

let outerEl = bars && bars[outer];
let innerEl = bars && bars[inner];

export const barsSlice = createSlice({
  name: "bars",
  initialState: {
    bars,
    outer,
    inner,
    outerEl,
    innerEl,
    barNum,
  },
  reducers: {
    setBarNum: (state, action) => {
      state.bars = Array.from({ length: action.payload }, () =>
        getRandomInt(20, 400)
      );
      state.outer = 0;
      state.inner = state.outer + 1;
      state.outerEl = state.bars[state.outer];
      state.innerEl = state.bars[state.inner];
    },
    bubbleSorter: (state) => {
      if (state.outer < state.bars.length) {
        if (state.outerEl > state.innerEl) {
          state.bars[state.outer] = state.innerEl;
          state.bars[state.inner] = state.outerEl;
          state.outerEl = state.bars[state.outer];
          state.innerEl = state.bars[state.inner];
        }
        state.inner++;
        state.innerEl = state.bars[state.inner];

        if (state.inner === state.bars.length) {
          state.outer++;
          state.outerEl = state.bars[state.outer];
          state.inner = state.outer + 1;
          state.innerEl = state.bars[state.inner];
        }
      }
    },
  },
});
export const { bubbleSorter, fillBubbleSort, setBarNum } = barsSlice.actions;

export default barsSlice.reducer;
