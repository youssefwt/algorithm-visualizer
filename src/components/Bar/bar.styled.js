import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 1px solid green;
`;

export const StyledBar = styled.div`
  display: inline-block;
  background-color: ${({ i, outer, inner, lastIndex, isBubble }) =>
    i < outer && isBubble
      ? "lightgreen"
      : i === outer && i !== lastIndex && isBubble
      ? "yellow"
      : i === inner && isBubble
      ? "turquoise"
      : outer === lastIndex
      ? "lightgreen"
      : "bisque"};
  border: ${({ i, linearIndex, linearFoundIndex, isLinear, isSearching }) =>
    i === linearFoundIndex && isLinear && isSearching
      ? `2px solid green`
      : i === linearIndex && !linearFoundIndex && isLinear && isSearching
      ? `1px solid red`
      : `none`};
  margin: 0 2px;
  padding-top: ${({ bar }) => `${bar}px`};

  writing-mode: tb-rl;
  transform: rotate(-180deg);
  align-self: flex-end;
`;
