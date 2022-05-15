import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "../Bar/Bar";
import { Container, Arrow, BarsContainer } from "./bars.styled";

export const Bars = () => {
  const {
    bars,
    outer,
    inner,
    isBubble,
    linearIndex,
    linearFoundIndex,
    isLinear,
    isSearching,
    sorted,
    bubbleV,
  } = useSelector((state) => state.barsSlice);

  return (
    <Container>
      {bars.map((bar, index) => (
        <BarsContainer key={index}>
          <Arrow i={index} linearFoundIndex={linearFoundIndex} />
          <Bar
            bubbleV={bubbleV}
            sorted={sorted}
            isSearching={isSearching}
            isLinear={isLinear}
            linearFoundIndex={linearFoundIndex}
            linearIndex={linearIndex}
            isBubble={isBubble}
            lastIndex={bars.length - 1}
            outer={outer}
            inner={inner}
            i={index}
            bar={bars[index]}
          >
            {bar}
          </Bar>
        </BarsContainer>
      ))}
    </Container>
  );
};
