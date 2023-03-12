import styled from "styled-components";

export const Container = styled.div`
  margin-top: 8rem;
  img {
    width: 300px;
    border-radius: 1rem;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MovieDetails = styled.div`
  color: ${(props) => props.theme.colors.text.primary};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 4rem;
  max-width: 50%;
`;

export const GoBack = styled.button`
  background: ${(props) => props.theme.colors.primary};
  border: none;
  cursor: pointer;
  border-radius: 1rem;
  color: white;
  padding: 0.8rem 2rem;
  margin-top: 1rem;
  font-size: 100%;
  transition: all 0.3s;

  :hover {
    background: #25193e;
  }
`;
