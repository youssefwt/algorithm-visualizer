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
    isBinary,
    binaryFoundIndex,
    start,
    end,
    median,
    isLinear,
    isSearching,
    sorted,
    bubbleV,
  } = useSelector((state) => state.barsSlice);

  return (
    <Container>
      {bars.map((bar, index) => (
        <BarsContainer key={index}>
          <Arrow
            isBinary={isBinary}
            i={index}
            linearFoundIndex={linearFoundIndex}
            median={median}
            end={end}
            start={start}
            binaryFoundIndex={binaryFoundIndex}
          />
          <Bar
            median={median}
            end={end}
            start={start}
            binaryFoundIndex={binaryFoundIndex}
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
