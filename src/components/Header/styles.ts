import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0 2rem;
  background-color: #0f0f0f;
`;

export const Logo = styled.h1`
  padding: 0.3rem 0;
  font-size: 2rem;
  font-weight: bold;
`;

export const LightSwitch = styled.div`
  padding: 1rem 0;
  position: relative;
  font-size: 1.5rem;
`;
