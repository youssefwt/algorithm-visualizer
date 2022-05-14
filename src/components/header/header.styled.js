import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 15vh;
  background: radial-gradient(
    ellipse farthest-corner at center center,
    #5aede8 0%,
    #0090ff 55%,
    #a0cdff 60%,
    #0090ff 65%,
    #b4d6ff 70%,
    #0090ff 75%,
    #b4d6ff 80%,
    #0090ff 85%,
    #b4d6ff 90%,
    #0090ff 95%
  );
  box-shadow: -2px 10px 12px 1px rgba(77, 135, 207, 0.75);
  /* box-shadow: 0px 26px 53px -15px rgba(88, 119, 242, 0.75); */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p`
  color: white;
  font-size: 3.5rem;
  font-weight: 600;
  text-shadow: 3px 1px 2px rgba(128, 29, 149, 0.6);
`;

export const Caption = styled.p`
  color: white;
  font-size: 1.2rem;
  text-shadow: 3px 1px 2px rgba(128, 29, 149, 0.6);
  letter-spacing: 0.5rem;
`;
