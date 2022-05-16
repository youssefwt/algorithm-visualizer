import { createSlice } from "@reduxjs/toolkit";
/**generating random array */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let barNum = 30;

function getRandomArray(barNum) {
  return Array.from({ length: barNum }, () => getRandomInt(20, 450));
}

let bars = getRandomArray(barNum);
/************************************************************************************* */

/**global sorting variables */
let isSorting = false;
let sorted = false;
/***************************************************************************************** */

/**bubble sort variables */
let isBubble = false;
let bubbleV = null;
let loops = 0;
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

/**Binary search variable */
let isBinary = false;
/////////////////////////////////////////how to init ??
let start = 0;
let end = bars.length - 1;
let median = Math.floor((end - start) / 2);
let binaryFoundIndex = null;
// let start = 0;
// let end = null;
// let median = null;
// let binaryFoundIndex = null;
/****************************************************************************************** */

export const barsSlice = createSlice({
  name: "bars",
  initialState: {
    bars,
    isBubble,
    bubbleV,
    loops,
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
    start,
    end,
    median,
    binaryFoundIndex,
    isBinary,
  },
  reducers: {
    /**set bars number */
    setBarNum: (state, action) => {
      state.bars = getRandomArray(action.payload);
      state.outer = 0;
      state.inner = state.outer + 1;
      state.outerEl = state.bars[state.outer];
      state.innerEl = state.bars[state.inner];

      state.start = 0;
      state.end = state.bars.length - 1; //here now !!!
      state.median = Math.floor((state.end - state.start) / 2);
      state.binaryFoundIndex = null;
      state.isBinary = false;
      state.isSearching = false;
    },
    /********************************************************************* */

    /**stop actions */
    stopActions: (state, action) => {
      if (action.payload === "range") state.sorted = false;
      state.loops = 0;
      state.isBubble = false;
      state.foundNumber = null;
      state.isLinear = false;
      state.isBinary = false;
      state.linearIndex = -1;
      state.linearFoundIndex = null;
      state.isSearching = false;

      if (state.binaryFoundIndex) {
        state.start = 0;
        state.end = state.bars.length - 1; //here now !!!
        state.median = Math.floor((state.end - state.start) / 2);
        state.binaryFoundIndex = null;
      }
    },
    /******************************************************************** */

    /**bubble sort varient 2 */
    bubbleSorter: (state, action) => {
      state.isSearching = false;

      state.isBubble = true;
      /**  v2 */
      if (action.payload === "sv2") {
        state.bubbleV = 2;

        if (state.outer < state.bars.length && !state.sorted) {
          if (state.outerEl > state.innerEl) {
            state.bars[state.outer] = state.innerEl;
            state.bars[state.inner] = state.outerEl;
            state.outerEl = state.bars[state.outer];
            state.innerEl = state.bars[state.inner];
          }
          state.inner++;
          state.innerEl = state.bars[state.inner];

          if (state.inner === state.bars.length) {
            console.log(state.loops);
            state.loops++;
            console.log(state.loops);

            state.outer++;
            state.outerEl = state.bars[state.outer];
            state.inner = state.outer + 1;
            state.innerEl = state.bars[state.inner];
            if (state.loops === state.bars.length - 1) {
              state.sorted = true;
              console.log(state.sorted);
            }
          }
        }
        /******************************************************************************************** */
        /**  v1 */
      } else if (action.payload === "sv1") {
        state.bubbleV = 1;

        if (state.loops < state.bars.length - 1 && !state.sorted) {
          if (state.outerEl > state.innerEl) {
            state.bars[state.outer] = state.innerEl;
            state.bars[state.inner] = state.outerEl;
            state.outerEl = state.bars[state.outer];
            state.innerEl = state.bars[state.inner];
          }
          if (state.inner === state.bars.length - (state.loops + 1)) {
            state.loops++;
            state.outer = 0;
            state.outerEl = state.bars[state.outer];
            state.inner = state.outer + 1;
            state.innerEl = state.bars[state.inner];
            if (state.loops === state.bars.length - 1) {
              state.sorted = true;
              console.log(state.sorted);
            }
          } else {
            state.outer++;
            state.outerEl = state.bars[state.outer];
            state.inner++;
            state.innerEl = state.bars[state.inner];
          }
        }
      }
    },
    /************************************************************************* */

    /**linear search */
    linearSearcher: (state, action) => {
      state.isSearching = true;
      state.isLinear = true;
      state.isBinary = false;

      if (state.linearIndex < state.bars.length) {
        if (action.payload === state.bars[state.linearIndex]) {
          state.foundNumber = state.bars[state.linearIndex];
          state.linearFoundIndex = state.linearIndex;
        }
        if (!state.linearFoundIndex) state.linearIndex++;
      }
    },
    /************************************************************************ */

    /**Binary search */
    binarySearcher: (state, action) => {
      state.isSearching = true;
      state.isBinary = true;
      state.isLinear = false;

      console.log(state.bars[0]);
      console.log(state.start);
      console.log(state.end);
      console.log(state.median);
      if (state.sorted) {
        if (state.start <= state.end) {
          state.median =
            state.start + Math.floor((state.end - state.start) / 2);
          if (action.payload === state.bars[state.median]) {
            console.log("payload = median");

            state.foundNumber = state.bars[state.median];
            state.binaryFoundIndex = state.median;
            console.log(state.binaryFoundIndex);
          } else if (state.bars[state.median] < action.payload) {
            console.log("median < payload");
            state.start = state.median + 1;
            //what about the rest X
          } else {
            console.log("median > payload");
            state.end = state.median - 1;
            //what about the rest X
          }
        } else {
          state.foundNumber = "not-found";
        }
      }
    },

    /*********************************************************************** */
  },
});

export const {
  bubbleSorter,
  fillBubbleSort,
  setBarNum,
  linearSearcher,
  stopActions,
  binarySearcher,
} = barsSlice.actions;

export default barsSlice.reducer;
