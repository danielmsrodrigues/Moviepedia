import styled from "styled-components";

export const Container = styled.div`
  background: black;
  color: white;
  height: 100%;
  width: 100%;
  text-align: center;
  position: absolute;
`;

export const Message = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;

  a {
    color: white;
  }
`;
