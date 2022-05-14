import React from "react";
import { Container, StyledBar } from "./bar.styled";

export const Bar = (props) => {
  return (
    <>
      <Container>
        <StyledBar {...props}>{props.children}</StyledBar>
      </Container>
    </>
  );
};
