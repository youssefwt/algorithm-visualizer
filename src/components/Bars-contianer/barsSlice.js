import { createSlice } from "@reduxjs/toolkit";
/**generating random array */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let barNum = 30;

let bars = Array.from({ length: barNum }, () => getRandomInt(20, 450));
/************************************************************************************* */

/**global sorting variables */
let isSorting = false;
let sorted = false;
/***************************************************************************************** */

/**bubble sort variables */
let isBubble = false;
let outer = 0;
let inner = outer + 1;
let outerEl = bars && bars[outer];
let innerEl = bars && bars[inner];
/*************************************************************************************** */

/**global search variables */
let foundNumber = null;
let isSearching = false;
/**************************************************************************************** */

/**linear search variables */
let isLinear = false;
let linearFoundIndex = null;
let linearIndex = -1;

/**************************************************************************************** */

export const barsSlice = createSlice({
  name: "bars",
  initialState: {
    bars,
    isBubble,
    isLinear,
    isSearching,
    outer,
    inner,
    outerEl,
    innerEl,
    barNum,
    foundNumber,
    linearIndex,
    linearFoundIndex,
    isSorting,
    sorted,
  },
  reducers: {
    /**set bars number */
    setBarNum: (state, action) => {
      state.bars = Array.from({ length: action.payload }, () =>
        getRandomInt(20, 400)
      );
      state.outer = 0;
      state.inner = state.outer + 1;
      state.outerEl = state.bars[state.outer];
      state.innerEl = state.bars[state.inner];
    },
    /********************************************************************* */

    /**stop actions */
    stopActions: (state) => {
      state.isBubble = false;
      state.foundNumber = null;
      state.isLinear = false;
      state.linearIndex = -1;
      state.linearFoundIndex = null;
    },
    /******************************************************************** */

    /**bubble sort */
    bubbleSorter: (state) => {
      state.isSearching = false;
      state.isBubble = true;
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
    /************************************************************************* */

    /**linear search */
    linearSearcher: (state, action) => {
      state.isSearching = true;
      state.isLinear = true;
      if (state.linearIndex < state.bars.length) {
        if (action.payload === state.bars[state.linearIndex]) {
          state.foundNumber = state.bars[state.linearIndex];
          state.linearFoundIndex = state.linearIndex;
        }
        state.linearIndex++;
      }
    },
    /************************************************************************ */
  },
});

export const {
  bubbleSorter,
  fillBubbleSort,
  setBarNum,
  linearSearcher,
  stopActions,
} = barsSlice.actions;

export default barsSlice.reducer;
