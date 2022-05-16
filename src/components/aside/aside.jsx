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
  binarySearcher,
} from "../Bars-contianer/barsSlice";
import { useState } from "react";

export const Aside = () => {
  /*get bars from store, and local states */
  const { bars, foundNumber, linearIndex, isSearching, sorted } = useSelector(
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
    dispatch(stopActions("range"));
    dispatch(setBarNum(input * 1));
    setSearchFor(null);
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
  const bubbleSort = (v) => {
    dispatch(stopActions(v));
    clearIntervals();
    // dispatch(bubbleSorter(v));
    setInterval(() => {
      dispatch(bubbleSorter(v));
    }, 50);
  };

  if (sorted && !isSearching) {
    clearIntervals();
  }
  /***************************************************************** */

  /**linear search */
  const linearSearch = () => {
    notFound.current = false;
    dispatch(stopActions());
    clearIntervals();
    //dispatch linearSearcher one time first to switch isSearching to true
    dispatch(linearSearcher(searchFor * 1));
    if (searchFor) {
      setInterval(() => {
        dispatch(linearSearcher(searchFor * 1));
      }, 500);
    }
  };

  if (linearIndex === bars.length && !foundNumber && isSearching) {
    console.log("not found");
    notFound.current = true;
    clearIntervals();
  }

  if (foundNumber && isSearching) {
    clearIntervals();
  }

  /*****************************************************************************************/

  /**binarySearcher */
  const binarySearch = () => {
    if (sorted) {
      notFound.current = false;
      dispatch(stopActions());
      clearIntervals();
      dispatch(binarySearcher(searchFor * 1));
      if (searchFor) {
        setInterval(() => {
          dispatch(binarySearcher(searchFor * 1));
        }, 500);
      }
    }
  };

  if (foundNumber && isSearching) {
    if (foundNumber === "not-found") notFound.current = true;
    console.log(foundNumber);
    clearIntervals();
  }
  /************************************** */

  return (
    <Container>
      <br />
      {sorted && <p>sorted</p>}
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
      <p>--------------------------------</p>
      <SortContianer>
        <Button onClick={() => bubbleSort("sv1")}>Bubble sort V1</Button>
        <Button onClick={() => bubbleSort("sv2")}>Bubble sort V2</Button>
      </SortContianer>
      <p>--------------------------------</p>{" "}
      <SearchContianer>
        <div>
          <Label option="inline">Search for: </Label>
          <input
            style={{ width: "40px", display: "inline", textAlign: "center" }}
            type="text"
            onChange={(e) => getSearchFor(e.target.value)}
          />
        </div>
        <Button onClick={linearSearch}>Linear search</Button>
        <Button onClick={binarySearch}>Binary search</Button>
        <FoundMessage notFound={notFound.current}>not found</FoundMessage>
      </SearchContianer>
      <p>--------------------------------</p>
    </Container>
  );
};
