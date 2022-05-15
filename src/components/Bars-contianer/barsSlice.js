import { createSlice } from "@reduxjs/toolkit";
/**generating random array */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let barNum = 5;

function getRandomArray() {
  return Array.from({ length: barNum }, () => getRandomInt(20, 450));
}

let bars = getRandomArray();
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
let start = 0;
let end = bars.length - 1;
let median = Math.floor((end - start) / 2);
let binaryFoundIndex = null;
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
    stopActions: (state, action) => {
      if (action.payload === "range") state.sorted = false;
      state.loops = 0;
      state.isBubble = false;
      state.foundNumber = null;
      state.isLinear = false;
      state.linearIndex = -1;
      state.linearFoundIndex = null;
      state.start = 0;
      state.end = bars.length - 1;
      state.median = Math.floor((end - start) / 2);
    },
    /******************************************************************** */

    /**bubble sort varient 2 */
    bubbleSorter: (state, action) => {
      /**  v2 */
      if (action.payload === "sv2") {
        state.bubbleV = 2;
        state.isSearching = false;
        state.isBubble = true;
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
        state.isSearching = false;
        state.isBubble = true;

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

      if (state.linearIndex < state.bars.length) {
        if (action.payload === state.bars[state.linearIndex]) {
          state.foundNumber = state.bars[state.linearIndex];
          state.linearFoundIndex = state.linearIndex;
        }
        state.linearIndex++;
      }
    },
    /************************************************************************ */

    /**Binary search */
    binarySearcher: (state, action) => {
      state.isSearching = true;
      state.isBinary = true;

      if (state.start <= state.end) {
        state.median = state.start + Math.floor((state.end - state.start) / 2);
        if (action.payload === state.bars[state.median]) {
          console.log("payload = median");
          state.foundNumber = state.bars[state.median];
          state.binaryFoundIndex = state.median;
          console.log(state.binaryFoundIndex);
        } else if (state.bars[state.median] < action.payload) {
          console.log("median < payload");
          state.start = state.median + 1;
        } else {
          console.log("median > payload");
          state.end = state.median - 1;
        }
      } else {
        state.foundNumber = "not-found";
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
