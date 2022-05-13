import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "../Bar/Bar";
import { Container } from "./bars.styled";

export const Bars = () => {
  const { bars, outer, inner } = useSelector((state) => state.barsSlice);

  return (
    <Container>
      {bars.map((bar, index) => (
        <Bar
          lastIndex={bars.length - 1}
          outer={outer}
          inner={inner}
          i={index}
          bar={bars[index]}
          key={index}
        >
          {bar}
        </Bar>
      ))}
    </Container>
  );
};
