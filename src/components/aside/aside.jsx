import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button } from "./aside.styled";
import { bubbleSorter, setBarNum } from "../Bars-contianer/barsSlice";

export const Aside = () => {
  const { bars } = useSelector((state) => state.barsSlice);
  const dispatch = useDispatch();

  const bubbleSort = () => {
    // dispatch(bubbleSorter());
    let t = setInterval(() => {
      dispatch(bubbleSorter());
    }, 80);

    setTimeout(() => {
      clearInterval(t);
    }, bars.length * bars.length * 100);
  };

  const setNum = (input) => {
    console.log(input);
    dispatch(setBarNum(input * 1));

    // Get a reference to the last interval + 1
    const interval_id = window.setInterval(function () {},
    Number.MAX_SAFE_INTEGER);
    // Clear any timeout/interval up to that id
    for (let i = 1; i < interval_id; i++) {
      window.clearInterval(i);
    }
  };

  return (
    <Container>
      <Button onClick={bubbleSort}>bubble sort</Button>
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
