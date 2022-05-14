import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid blue;
  width: 25%;
  height: 100%;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  padding: 1rem;
  border-radius: 0.5rem;
  width: 50%;
  margin: 1rem;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
`;

export const NotFoundMessage = styled.p`
  color: red;
  display: ${({ notFound }) => (notFound ? "bock" : "none")};
`;
