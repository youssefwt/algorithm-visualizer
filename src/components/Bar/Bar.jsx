import React from "react";
import { Container, StyledBar } from "./bar.styled";

export const Bar = (props) => {
  // const getBgColor = ({
  //   i,
  //   outer,
  //   isBubble,
  //   bubbleV,
  //   sorted,
  //   lastIndex,
  //   inner,
  // }) => {
  //   let bg = "bisque";
  //   let border;
  //   if ((i < outer && isBubble && bubbleV !== 1) || sorted) {
  //     bg = `lightgreen`;
  //   }
  //   if (i === outer && i !== lastIndex && isBubble) {
  //     bg = `yellow`;
  //   }
  //   if (i === inner && isBubble) {
  //     bg = "lightblue";
  //   }
  //   if (outer === lastIndex) {
  //     bg = `lightgreen`;
  //   }

  //   return bg;
  // };

  return (
    <>
      <Container>
        <StyledBar
          // style={{ backgroundColor: getBgColor({ ...props }) }}
          {...props}
        >
          {props.children}
        </StyledBar>
      </Container>
    </>
  );
};
