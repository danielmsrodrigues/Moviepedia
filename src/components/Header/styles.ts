import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 2rem;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export const LightSwitch = styled.div`
  padding: 1rem 0;
  position: relative;
  font-size: 1.5rem;
`;

export const SearchBar = styled.input`
  height: 2.5rem;
  width: 20rem;
  border-radius: 2rem;
  outline: none;
  border: none;
  padding: 1rem;
  font-size: 1rem;
`;
