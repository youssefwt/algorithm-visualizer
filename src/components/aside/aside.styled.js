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

export const SearchContianer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;

export const SortContianer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;

export const Button = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;

  margin: 0.5rem;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
`;

export const FoundMessage = styled.p`
  color: red;
  display: ${({ notFound }) => (notFound ? "bock" : "none")};
`;

export const Label = styled.span`
  display: ${({ option }) => (option === "block" ? "block" : "inline")};
`;
