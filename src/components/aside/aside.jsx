import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Button,
  FoundMessage,
  Label,
  AlgorithmContianer,
  AlgoTitle,
  SpeedContainer,
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
  const [searchFor, setSearchFor] = useState("");
  const [selected, setSelected] = useState("150");
  const [barNumber, setBarNumber] = useState("30");

  const notFound = useRef(false);
  const dispatch = useDispatch();
  const getSearchFor = (input) => {
    if (input) setSearchFor(input);
  };
  /************************************************************* */

  /*choose bars number */
  const setNum = (input) => {
    dispatch(stopActions("range"));
    dispatch(setBarNum(input * 1));
    setSearchFor("");
    clearIntervals();
  };
  /************************************************************* */

  /**choose speed */
  const speedCheck = (event) => {
    setSelected(event.target.value);
  };

  /************************ */

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
    notFound.current = false;
    setSearchFor("");
    dispatch(stopActions(v));
    clearIntervals();
    // dispatch(bubbleSorter(v));
    setInterval(() => {
      dispatch(bubbleSorter(v));
    }, selected * 1);
  };

  if (sorted && !isSearching) {
    clearIntervals();
  }
  /***************************************************************** */

  /**linear search */
  const linearSearch = () => {
    // setSearchFor("");
    notFound.current = false;
    dispatch(stopActions());
    clearIntervals();
    //dispatch linearSearcher one time first to switch isSearching to true
    if (searchFor) {
      dispatch(linearSearcher(searchFor * 1));
      setInterval(() => {
        dispatch(linearSearcher(searchFor * 1));
      }, selected * 1);
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
      // setSearchFor("");
      notFound.current = false;
      dispatch(stopActions());
      clearIntervals();
      if (searchFor) {
        dispatch(binarySearcher(searchFor * 1));
        setInterval(() => {
          dispatch(binarySearcher(searchFor * 1));
        }, selected * 1);
      }
    } else {
      alert("Array must be sorted");
    }
  };

  if (foundNumber && isSearching) {
    if (foundNumber === "not-found") notFound.current = true;
    console.log(foundNumber);
    clearIntervals();
  }
  /************************************** */

  /***Restart */
  const restart = () => {
    notFound.current = false;
    setSearchFor("");
    clearIntervals();
    dispatch(stopActions("reset"));
    setBarNumber("30");
    dispatch(setBarNum(30));
  };
  /***************************** */

  return (
    <Container>
      <br />
      <Label option="block">Choose number of bars</Label>
      <br />
      <input
        className="range"
        type="range"
        defaultValue={barNumber}
        max="55"
        min="3"
        step="1"
        onChange={(e) => setNum(e.target.value)}
      />
      <p style={{ marginTop: "1rem" }}>Select speed</p>
      <SpeedContainer>
        <div>
          <input
            checked={selected === "600"}
            onChange={speedCheck}
            type="radio"
            id="0.25"
            name="sort-speed"
            value="600"
          />
          <label htmlFor="0.25">0.25x</label>
        </div>
        <div>
          <input
            checked={selected === "300"}
            onChange={speedCheck}
            type="radio"
            id="0.5"
            name="sort-speed"
            value="300"
          />
          <label htmlFor="0.5">0.5x</label>
        </div>
        <div>
          <input
            checked={selected === "150"}
            onChange={speedCheck}
            type="radio"
            id="1"
            name="sort-speed"
            value="150"
          />
          <label htmlFor="1">1x</label>
        </div>
        <div>
          <input
            checked={selected === "50"}
            onChange={speedCheck}
            type="radio"
            id="1.5"
            name="sort-speed"
            value="50"
          />
          <label htmlFor="1.5">1.5x</label>
        </div>
      </SpeedContainer>
      <AlgoTitle>Sorting algorithms</AlgoTitle>
      {sorted && <p>sorted</p>}
      <AlgorithmContianer>
        <Button onClick={() => bubbleSort("sv1")}>Bubble sort V1</Button>
        <Button onClick={() => bubbleSort("sv2")}>Bubble sort V2</Button>
        <Button disabled>Selection sort</Button>
        <Button disabled>Insertion sort</Button>
      </AlgorithmContianer>

      <AlgoTitle>Searching algorithms</AlgoTitle>
      <AlgorithmContianer>
        <div>
          <Label option="inline">Search for:</Label>
          <input
            value={searchFor}
            style={{ width: "40px", display: "inline", textAlign: "center" }}
            type="text"
            onChange={(e) => getSearchFor(e.target.value)}
          />
        </div>
        <Button onClick={linearSearch}>Linear search</Button>
        <Button onClick={binarySearch}>Binary search</Button>
        <FoundMessage notFound={notFound.current}>not found</FoundMessage>
      </AlgorithmContianer>
      <Button onClick={restart}>Generate new array</Button>
    </Container>
  );
};
