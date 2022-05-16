import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledBar = styled.div`
  /* display: inline-block; */

  background-color: ${({
    i,
    outer,
    inner,
    lastIndex,
    isBubble,
    bubbleV,
    sorted,
  }) =>
    (i < outer && isBubble && bubbleV !== 1) || sorted
      ? "lightgreen"
      : i === outer && i !== lastIndex && isBubble
      ? "yellow"
      : i === inner && isBubble
      ? "lightblue"
      : outer === lastIndex
      ? "lightgreen"
      : "bisque"};

  border: ${({
    i,
    linearIndex,
    linearFoundIndex,
    isLinear,
    isSearching,
    binaryFoundIndex,
    start,
    end,
    median,
    isBinary,
  }) =>
    (i === linearFoundIndex || i === binaryFoundIndex) && isSearching
      ? `2px solid darkgreen`
      : i === linearIndex && !linearFoundIndex && isLinear && isSearching
      ? `2px solid red`
      : (i === start || i === end) && isSearching && !isLinear
      ? `2px solid magenta`
      : i === median && isSearching && !isLinear
      ? `2px solid blue`
      : "none"};
  margin: 0 2px;
  padding-top: ${({ bar }) => `${bar}px`};

  writing-mode: tb-rl;
  transform: rotate(-180deg);
  align-self: flex-end;
`;
