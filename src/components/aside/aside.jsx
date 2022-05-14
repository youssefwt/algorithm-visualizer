import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Button,
  FoundMessage,
  Label,
  SortContianer,
  SearchContianer,
} from "./aside.styled";
import {
  bubbleSorter,
  stopActions,
  setBarNum,
  linearSearcher,
} from "../Bars-contianer/barsSlice";
import { useState } from "react";

export const Aside = () => {
  /*get bars from store, and local states */
  const { bars, foundNumber, linearIndex, isSearching } = useSelector(
    (state) => state.barsSlice
  );
  const [searchFor, setSearchFor] = useState(null);
  let notFound = useRef(false);
  const dispatch = useDispatch();
  const getSearchFor = (input) => {
    if (input) setSearchFor(input);
  };
  /************************************************************* */

  /*choose bars number */
  const setNum = (input) => {
    dispatch(stopActions());
    dispatch(setBarNum(input * 1));

    clearIntervals();
  };
  /************************************************************* */

  /**clear all intervals */
  const clearIntervals = () => {
    // Get a reference to the last interval + 1
    const interval_id = window.setInterval(function () {},
    Number.MAX_SAFE_INTEGER);
    // Clear any timeout/interval up to that id
    for (let i = 1; i < interval_id; i++) {
      window.clearInterval(i);
    }
  };
  /**************************************************************** */

  /**bubble sort */
  const bubbleSort = () => {
    dispatch(stopActions());
    clearIntervals();
    // dispatch(bubbleSorter());
    let t = setInterval(() => {
      dispatch(bubbleSorter());
    }, 80);

    setTimeout(() => {
      clearInterval(t);
    }, bars.length * bars.length * 100);
  };
  /***************************************************************** */

  /**linear search */
  const linearSearch = () => {
    dispatch(stopActions());
    clearIntervals();
    if (searchFor) {
      setInterval(() => {
        dispatch(linearSearcher(searchFor * 1));
      }, 800);
    }
  };

  if (linearIndex === bars.length && !foundNumber && isSearching) {
    console.log("not found");
    notFound.current = true;
  }

  if (foundNumber && isSearching) {
    clearIntervals();
  }

  /*****************************************************************************************/

  return (
    <Container>
      <br />
      <br />
      <Label option="block">Choose number of bars</Label>
      <br />
      <input
        className="range"
        type="range"
        defaultValue="30"
        max="55"
        min="3"
        step="1"
        onChange={(e) => setNum(e.target.value)}
      />
      <br />
      <p>-------------------------------------</p>
      <SortContianer>
        <Button onClick={bubbleSort}>Bubble sort</Button>
      </SortContianer>
      <p>-------------------------------------</p>
      <SearchContianer>
        <div>
          <Label option="inline">Search for: </Label>
          <input
            style={{ width: "40px", display: "inline", textAlign: "center" }}
            type="text"
            onChange={(e) => getSearchFor(e.target.value)}
          />
        </div>
      </SearchContianer>

      <Button onClick={linearSearch}>Linear search</Button>
      <Button>Binary search</Button>
      <FoundMessage notFound={notFound.current}>not found</FoundMessage>
    </Container>
  );
};
