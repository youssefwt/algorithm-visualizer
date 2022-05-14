import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, NotFoundMessage } from "./aside.styled";
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
      <Button onClick={bubbleSort}>bubble sort</Button>
      <input type="text" onChange={(e) => getSearchFor(e.target.value)} />
      <Button onClick={linearSearch}>linear search</Button>
      <NotFoundMessage notFound={notFound.current}>not found</NotFoundMessage>

      <br />
      <input
        type="range"
        defaultValue="25"
        max="47"
        min="5"
        step="1"
        onChange={(e) => setNum(e.target.value)}
      />
    </Container>
  );
};
