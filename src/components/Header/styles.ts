import styled from "styled-components";

export const Container = styled.div`
  height: 4rem;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;
