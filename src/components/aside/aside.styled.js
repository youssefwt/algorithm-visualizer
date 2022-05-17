import styled from "styled-components";

export const Container = styled.div`
  width: 15%;
  height: 100%;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 31px 0px 20px -20px rgba(205, 205, 219, 0.75) inset;
`;

export const AlgorithmContianer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  box-shadow: 0px 10px 12px -6px rgba(129, 146, 148, 0.49);

  padding: 0.4rem 0;
`;

export const Button = styled.button`
  padding: 0.3rem;
  border-radius: 0.5rem;
  margin: 0.3rem;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    background-color: lightgray;
  }
  &:disabled:hover {
    background-color: white;
  }
`;

export const SpeedContainer = styled.div`
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  font-size: 0.9rem;
`;

export const AlgoTitle = styled.p`
  margin: 1rem auto;
  background-color: lightblue;
  padding: 0.3rem;
  font-weight: 600;
`;

export const FoundMessage = styled.p`
  color: red;
  display: ${({ notFound }) => (notFound ? "bock" : "none")};
`;

export const Label = styled.span`
  display: ${({ option }) => (option === "block" ? "block" : "inline")};
  padding: 0;
`;
