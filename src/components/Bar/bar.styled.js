import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 1px solid green;
`;

export const StyledBar = styled.div`
  display: inline-block;
  background-color: ${({ i, outer, inner, lastIndex }) =>
    i < outer
      ? "lightgreen"
      : i === outer && i !== lastIndex
      ? "yellow"
      : i === inner
      ? "turquoise"
      : outer === lastIndex
      ? "lightgreen"
      : "bisque"};
  /* background-color: bisque; */
  margin: 0 2px;
  padding-top: ${({ bar }) => `${bar}px`};
  /* width: 1.2rem; */
  /* writing-mode: vertical-lr; */
  writing-mode: tb-rl;
  transform: rotate(-180deg);
  align-self: flex-end;
`;
