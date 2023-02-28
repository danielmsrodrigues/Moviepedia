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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 4rem;
  max-width: 50%;

  button {
    background: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all 0.3s;
  }

  button:hover {
    background: #5848c2;
  }
`;
