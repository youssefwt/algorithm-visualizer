import React from "react";
import { StyledBar } from "./bar.styled";

export const Bar = (props) => {
  return <StyledBar {...props}>{props.children}</StyledBar>;
};
