import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: end;
  justify-content: center;
  height: 100%;
  align-self: flex-start;
  padding-bottom: 2rem;
`;

export const BarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const bounce = keyframes`
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-20px);
            transform: translateY(-20px);
  }
`;

export const Arrow = styled.div`
  margin-bottom: 1rem;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid green;
  display: ${({ i, linearFoundIndex, binaryFoundIndex }) =>
    i === linearFoundIndex || i === binaryFoundIndex ? "block" : "none"};

  animation: ${bounce} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite
    alternate both;
`;
