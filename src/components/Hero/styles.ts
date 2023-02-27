import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  z-index: 100;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-transform: uppercase;
  color: white;
  font-size: 3rem;
`;
export const HeroImage = styled.img`
  position: relative;
  height: 50vh;
  width: 100%;
  object-fit: cover;
  filter: brightness(20%);
`;
